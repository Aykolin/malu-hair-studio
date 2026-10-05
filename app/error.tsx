"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_SENTRY_DSN) Sentry.captureException(error);
  }, [error]);

  return (
    <main className="error-state">
      <p className="eyebrow">Algo saiu do lugar</p>
      <h1>Vamos tentar novamente.</h1>
      <p>Não foi possível carregar esta parte do site agora.</p>
      <Button type="button" className="gold-button" onClick={reset}>
        Recarregar conteúdo
      </Button>
    </main>
  );
}
