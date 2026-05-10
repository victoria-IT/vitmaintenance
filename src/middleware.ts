import { defineMiddleware } from "astro:middleware";

const DEV_HOST = "vitmaintenance.pages.dev";
const PROD_ORIGIN = "https://maintenance.victoriait.com";

export const onRequest = defineMiddleware((context, next) => {
  if (context.url.hostname.toLowerCase() === DEV_HOST) {
    const target = new URL(`${context.url.pathname}${context.url.search}${context.url.hash}`, PROD_ORIGIN);
    const response = Response.redirect(target.toString(), 301);
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  return next();
});
