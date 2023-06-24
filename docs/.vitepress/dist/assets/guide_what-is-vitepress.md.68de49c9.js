import{_ as e,o as r,c as t,V as a}from"./chunks/framework.51640bae.js";const c=JSON.parse('{"title":"VitePress 是什么？","description":"","frontmatter":{},"headers":[],"relativePath":"guide/what-is-vitepress.md","filePath":"guide/what-is-vitepress.md","lastUpdated":null}'),s={name:"guide/what-is-vitepress.md"},i=a('<h1 id="what-is-vitepress" tabindex="-1">VitePress 是什么？ <a class="header-anchor" href="#what-is-vitepress" aria-label="Permalink to &quot;VitePress 是什么？ {#what-is-vitepress}&quot;">​</a></h1><p>VitePress 是一个<a href="https://en.wikipedia.org/wiki/Static_site_generator" target="_blank" rel="noreferrer">静态站点生成器</a> (SSG)，专为构建快速、以内容为中心的网站而设计。简而言之，VitePress 获取用 Markdown 编写的源内容，对其应用主题，并生成可以轻松部署到任何地方的静态 HTML 页面。</p><div class="tip custom-block" style="padding-top:8px;"><p>只是想尝试一下？跳到<a href="./getting-started">快速开始</a>。</p></div><h2 id="use-cases" tabindex="-1">使用场景 <a class="header-anchor" href="#use-cases" aria-label="Permalink to &quot;使用场景 {#use-cases}&quot;">​</a></h2><ul><li><p><strong>文档</strong></p><p>VitePress 附带一个专为技术文档设计的默认主题，尤其是那些需要嵌入交互式演示的主题。它支持你正在阅读的这个页面，以及 <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a>、<a href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer">Pinia</a>、<a href="https://vueuse.org/" target="_blank" rel="noreferrer">VueUse</a>、<a href="https://mermaid.js.org/" target="_blank" rel="noreferrer">Mermaid</a>、<a href="https://doc.wikimedia.org/codex/latest/" target="_blank" rel="noreferrer">Wikimedia Codex</a> 等文档。</p><p><a href="https://vuejs.org/" target="_blank" rel="noreferrer">Vue.js 官方文档</a> 也是基于 VitePress 的。但是为了可以在不同的翻译文档之间共享，它自定义了自己的主题</p></li><li><p><strong>博客、档案和营销网站</strong></p><p>VitePress 支持<a href="./custom-theme">完全的自定义主题</a>，具有标准 Vite + Vue 应用程序的开发体验。基于 Vite 构建还意味着可以直接利用其丰富生态系统中的 Vite 插件。此外，VitePress 提供了灵活的 API 来<a href="./data-loading">加载数据</a> (本地或远程)，也可以<a href="./routing#dynamic-routes">动态生成路由</a>。只要可以在构建时确定数据，就可以使用它来构建几乎任何东西。</p><p><a href="https://blog.vuejs.org/" target="_blank" rel="noreferrer">Vue.js 官方博客</a> 是一个简单的博客页面，它根据本地内容生成其索引页面。</p></li></ul><h2 id="developer-experience" tabindex="-1">开发体验 <a class="header-anchor" href="#developer-experience" aria-label="Permalink to &quot;开发体验 {#developer-experience}&quot;">​</a></h2><p>VitePress 旨在使用 Markdown 生成内容时提供出色的开发体验。</p><ul><li><p><strong><a href="https://cn.vitejs.dev/" target="_blank" rel="noreferrer">Vite 驱动</a></strong>：即时服务器启动，始终立即反映（&lt;100ms）编辑变化，无需重新加载页面。</p></li><li><p><strong><a href="./markdown">内置 Markdown 扩展</a></strong>：Frontmatter、表格、语法高亮……应有尽有。具体来说，VitePress 提供了许多用于处理代码块的高级功能，使其真正成为技术文档的理想选择。</p></li><li><p><strong><a href="./using-vue">Vue 增强的 Markdown</a></strong>：每个 Markdown 页面都是 Vue <a href="https://cn.vuejs.org/guide/scaling-up/sfc.html" target="_blank" rel="noreferrer">单文件组件</a>，这要归功于 Vue 模板与 HTML 的 100% 语法兼容性。可以使用 Vue 模板语法或导入的 Vue 组件在静态内容中嵌入交互性。</p></li></ul><h2 id="performance" tabindex="-1">性能 <a class="header-anchor" href="#performance" aria-label="Permalink to &quot;性能 {#performance}&quot;">​</a></h2><p>与许多传统的 SSG 不同，VitePress 生成的网站实际上是一个<a href="https://en.wikipedia.org/wiki/Single-page_application" target="_blank" rel="noreferrer">单页应用程序</a> (SPA)。</p><ul><li><p><strong>快速初始加载</strong></p><p>对任何页面的初次访问都将提供静态的、预呈现的 HTML，以实现极快的加载速度和最佳的 SEO。然后页面加载一个 JavaScript 包，将页面变成 Vue SPA (这被称为“激活”)。激活是非常快的：在 <a href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fvitepress.dev%2F" target="_blank" rel="noreferrer">PageSpeed Insights</a> 上，典型的 VitePress 站点即使在网络速度较慢的低端移动设备上也能获得近乎完美的性能分数。</p></li><li><p><strong>加载完成后可以快速切换</strong></p><p>更重要的是，SPA 模型在首次加载后能够提升用户体验。用户在网站内导航时，不会再触发整个页面的刷新。而是通过获取并动态更新新页面的内容来实现切换。VitePress还会自动预加载视口范围内链接对应的页面片段。这样一来，大部分情况下，用户在加载完成后就能立即浏览新页面。</p></li><li><p><strong>高效的交互</strong></p><p>为了能够嵌入静态 Markdown 中的动态 Vue 部分，每个 Markdown 页面都被处理为 Vue 组件并编译成 JavaScript。这听起来可能效率低下，但 Vue 编译器足够聪明，可以将静态和动态部分分开，从而最大限度地减少激活成本和有效负载大小。对于初始页面加载，静态部分会自动从 JavaScript 有效负载中删除，并在激活期间跳过。</p></li></ul><h2 id="what-about-vuepress" tabindex="-1">VuePress 用户怎么办？ <a class="header-anchor" href="#what-about-vuepress" aria-label="Permalink to &quot;VuePress 用户怎么办？ {#what-about-vuepress}&quot;">​</a></h2><p>VitePress 灵感来源于 VuePress。最初的 VuePress 基于 Vue 2 和 webpack。借助 Vue 3 和 Vite，VitePress 提供了更好的开发体验、更好的生产性能、更精美的默认主题和更灵活的自定义 API。</p><p>VitePress 和 VuePress 之间的 API 区别主要在于主题和定制。如果你使用的是带有默认主题的 VuePress 1，迁移到 VitePress 应该相对简单。</p><p>VuePress 2 也投入了精力，它也支持 Vue 3 和 Vite，与 VuePress 1 的兼容性更好。但是，并行维护两个 SSG 是难以持续的，因此 Vue 团队决定将重点放在 VitePress，作为长期的主要 SSG 选择推荐。</p>',15),o=[i];function p(n,l,h,u,d,g){return r(),t("div",null,o)}const f=e(s,[["render",p]]);export{c as __pageData,f as default};
