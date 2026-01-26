import * as Sentry from "@sentry/astro";

Sentry.init({
  dsn: "https://556bd40145d6bd1c3112467164b35db5@o309930.ingest.us.sentry.io/4510776325177344",
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#sendDefaultPii
  sendDefaultPii: false,
});