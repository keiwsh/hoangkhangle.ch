/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, d as createAstro } from '../chunks/astro/server_D4UYQFd3.mjs';
import 'kleur/colors';
import { p as projectsPageContent, b as $$Layout } from '../chunks/Layout_CAvJeBJw.mjs';
import { M as Markdown } from '../chunks/component_DwKBhitF.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, description, year, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} target="_blank" class="py-6 flex flex-col gap-3 group-hover:opacity-70 hover:opacity-100 transition-opacity"> <div> <div class="flex items-center gap-2"> <h2 class="font-semibold text-lg">${title}</h2> <span class="text-sm opacity-50">${year}</span> </div> <div class="text-sm text-gray-600 opacity-70"> ${renderComponent($$result, "Markdown", Markdown, { "of": description })} </div> </div> </a>`;
}, "C:/Users/kei/Documents/Code/Personal/hoangkhangle.ch/src/components/ProjectCard.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": projectsPageContent.seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-xl mx-auto px-4"> <h1 class="font-bold text-2xl mb-4">projects</h1> <p class="opacity-70 mb-8 text-sm">${projectsPageContent.subtitle}</p> <div class="grid grid-cols-1 gap-6"> ${projectsPageContent.projects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { ...project })}`)} </div> </section> ` })}`;
}, "C:/Users/kei/Documents/Code/Personal/hoangkhangle.ch/src/pages/projects.astro", void 0);

const $$file = "C:/Users/kei/Documents/Code/Personal/hoangkhangle.ch/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
