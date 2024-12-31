/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CkK6yp1T.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$Layout } from '../chunks/Layout_DIORkI59.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <div class="row items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <div class="text-left space-y-3"> <h1 class="text-5xl font-medium leading-none md:text-6xl text-center md:text-left">Website down <br>for  maintenance</h1> <p class="mt-6 mb-8 text-xl font-normal leading-7 sm:mb-12 text-center md:text-left">Website is currently down for maintenance to server you better.
                Please check back soon for improved services and enhanced features. Thank you for your patience. If you have any questions please contact us </p> <div class="w-full justify-center md:justify-start items-center inline-flex"> <a href="tel:1800 687 806" target="_top" class="px-8 py-5 bg-zinc-900 hover:bg-white rounded-2xl text-center text-white hover:text-black border text-xl font-normal leading-7">Call us on 1800 687 806
</a> </div> </div> </div> <div class="flex items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <img src="/Hero.svg" width="100%" alt="Website down for maintenance"> </div> </div> ` })}`;
}, "/Users/mrahman/Documents/FullStackDev/Astro-Build/maintenance-victoriait/src/components/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Victoria IT -->${renderComponent($$result, "Layout", $$Layout, { "title": "Victoria IT" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20 mb-20 py-20"> ${renderComponent($$result2, "Hero", $$Hero, {})} </main> ` })}`;
}, "/Users/mrahman/Documents/FullStackDev/Astro-Build/maintenance-victoriait/src/pages/index.astro", void 0);

const $$file = "/Users/mrahman/Documents/FullStackDev/Astro-Build/maintenance-victoriait/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
