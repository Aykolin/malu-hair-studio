"use client";

import { useEffect } from "react";

async function initSentry() {
  const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
  if (!dsn) return;

  const Sentry = await import("@sentry/nextjs");
  Sentry.init({
    dsn,
    environment: process.env.NEXT_PUBLIC_APP_ENV ?? "production",
    tracesSampleRate: 0.1,
  });
}

async function initDatadog() {
  const applicationId = process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID;
  const clientToken = process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN;
  if (!applicationId || !clientToken) return;

  const { datadogRum } = await import("@datadog/browser-rum");
  datadogRum.init({
    applicationId,
    clientToken,
    site: process.env.NEXT_PUBLIC_DATADOG_SITE ?? "datadoghq.com",
    service: "malu-hair-studio",
    env: process.env.NEXT_PUBLIC_APP_ENV ?? "production",
    sessionSampleRate: 20,
    sessionReplaySampleRate: 0,
    trackResources: true,
    trackLongTasks: true,
    trackUserInteractions: true,
    defaultPrivacyLevel: "mask-user-input",
  });
}

async function initNewRelic() {
  const rawOptions = process.env.NEXT_PUBLIC_NEW_RELIC_OPTIONS;
  if (!rawOptions) return;

  const { BrowserAgent } = await import("@newrelic/browser-agent/loaders/browser-agent");
  const options = JSON.parse(rawOptions);
  new BrowserAgent(options);
}

async function initOpenTelemetry() {
  const endpoint = process.env.NEXT_PUBLIC_OTEL_EXPORTER_OTLP_ENDPOINT;
  if (!endpoint) return;

  const [
    trace,
    exporter,
    resources,
    semantic,
    instrumentation,
    documentLoad,
    fetchModule,
    userInteraction,
  ] = await Promise.all([
    import("@opentelemetry/sdk-trace-web"),
    import("@opentelemetry/exporter-trace-otlp-http"),
    import("@opentelemetry/resources"),
    import("@opentelemetry/semantic-conventions"),
    import("@opentelemetry/instrumentation"),
    import("@opentelemetry/instrumentation-document-load"),
    import("@opentelemetry/instrumentation-fetch"),
    import("@opentelemetry/instrumentation-user-interaction"),
  ]);

  const provider = new trace.WebTracerProvider({
    resource: resources.resourceFromAttributes({
      [semantic.ATTR_SERVICE_NAME]: "malu-hair-studio",
      [semantic.ATTR_SERVICE_VERSION]: process.env.NEXT_PUBLIC_APP_VERSION ?? "local",
    }),
    spanProcessors: [
      new trace.BatchSpanProcessor(new exporter.OTLPTraceExporter({ url: endpoint })),
    ],
  });

  provider.register();
  instrumentation.registerInstrumentations({
    instrumentations: [
      new documentLoad.DocumentLoadInstrumentation(),
      new fetchModule.FetchInstrumentation({
        propagateTraceHeaderCorsUrls: [/^https:\/\//],
      }),
      new userInteraction.UserInteractionInstrumentation(),
    ],
  });
}

export function Observability() {
  useEffect(() => {
    void Promise.allSettled([initSentry(), initDatadog(), initNewRelic(), initOpenTelemetry()]);
  }, []);

  return null;
}
