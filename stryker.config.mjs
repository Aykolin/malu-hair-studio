const config = {
  mutate: ["components/map-embed.tsx", "components/reveal.tsx"],
  testRunner: "vitest",
  reporters: ["clear-text", "progress"],
  coverageAnalysis: "perTest",
};

export default config;
