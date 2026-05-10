import { defineMiddleware } from "astro:middleware";

const DEV_HOST = "vitmaintenance.pages.dev";
const PROD_ORIGIN = "https://maintenance.victoriait.com";

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.hostname.toLowerCase() === DEV_HOST) {
    const target = new URL(`${context.url.pathname}${context.url.search}${context.url.hash}`, PROD_ORIGIN);
    return Response.redirect(target.toString(), 301);
  }

  return next();
});
