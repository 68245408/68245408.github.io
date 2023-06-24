import{_ as s,o as a,c as n,V as e}from"./chunks/framework.51640bae.js";const l="/assets/vitepress-init.dfe5638e.png",b=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started.md","filePath":"guide/getting-started.md","lastUpdated":null}'),p={name:"guide/getting-started.md"},o=e(`<h1 id="getting-started" tabindex="-1">快速开始 <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;快速开始 {#getting-started}&quot;">​</a></h1><h2 id="try-it-online" tabindex="-1">在线尝试 <a class="header-anchor" href="#try-it-online" aria-label="Permalink to &quot;在线尝试 {#try-it-online}&quot;">​</a></h2><p>可以直接在 <a href="https://vitepress.new" target="_blank" rel="noreferrer">StackBlitz</a> 上进行在线尝试。</p><h2 id="installation" tabindex="-1">安装 <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;安装 {#installation}&quot;">​</a></h2><h3 id="prerequisites" tabindex="-1">前置知识 <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;前置知识 {#prerequisites}&quot;">​</a></h3><ul><li><a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> 16 及以上版本。</li><li>通过命令行界面 (CLI) 访问 VitePress 的终端。</li><li>支持 <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank" rel="noreferrer">Markdown</a> 语法的编辑器。 <ul><li>推荐 <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCode</a> 及其<a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noreferrer">官方 Vue 扩展</a>。</li></ul></li></ul><p>VitePress 可以单独使用，也可以安装到现有项目中。在这两种情况下，都可以使用以下方式安装它：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-bHKnB" id="tab-c9s5c2i" checked="checked"><label for="tab-c9s5c2i">npm</label><input type="radio" name="group-bHKnB" id="tab-fJE2aTt"><label for="tab-fJE2aTt">pnpm</label><input type="radio" name="group-bHKnB" id="tab-PxdyYXr"><label for="tab-PxdyYXr">yarn</label></div><div class="blocks"><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><details class="details custom-block"><summary>遇到了 missing peer deps 警告？</summary><p>如果使用 PNPM，会注意到对 <code>@docsearch/js</code> 的 missing peer deps 警告。这不会影响 VitePress 运行。如果希望禁止显示此警告，请将以下内容添加到 <code>package.json</code>：</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pnpm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">peerDependencyRules</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">ignoreMissing</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@algolia/client-search</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></details><h3 id="setup-wizard" tabindex="-1">安装向导 <a class="header-anchor" href="#setup-wizard" aria-label="Permalink to &quot;安装向导 {#setup-wizard}&quot;">​</a></h3><p>VitePress 附带一个命令行设置向导，可以帮助你构建一个基本项目。安装后，通过运行以下命令启动向导：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-z6cst" id="tab-98u9-i5" checked="checked"><label for="tab-98u9-i5">npm</label><input type="radio" name="group-z6cst" id="tab-bXB6wp8"><label for="tab-bXB6wp8">pnpm</label></div><div class="blocks"><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p>你将需要回答几个简单的问题：</p><p><img src="`+l+`" alt="vitepress init screenshot" style="border-radius:8px;"></p><div class="tip custom-block"><p class="custom-block-title">Vue 作为</p><p>如果打算使用 Vue 组件或 API 进行自定义，还应该明确地将 <code>vue</code> 安装为 peer dependency。</p></div><h2 id="file-structure" tabindex="-1">文件结构 <a class="header-anchor" href="#file-structure" aria-label="Permalink to &quot;文件结构 {#file-structure}&quot;">​</a></h2><p>如果你正在构建一个独立的 VitePress 站点，你可以在当前目录 (<code>./</code>) 中搭建站点。但是，如果在现有项目中与其他源代码一起安装 VitePress，建议将站点搭建在嵌套目录 (例如 <code>./docs</code>) 中，以便它与项目的其余部分分开。</p><p>假设你选择在 <code>./docs</code> 中搭建 VitePress 项目，生成的文件结构应该是这样的：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ docs</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ .vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ api-examples.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ markdown-examples.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ package.json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>docs</code> 目录作为 VitePress 站点的项目<strong>根目录</strong>。<code>.vitepress</code> 目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的位置。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>默认情况下，VitePress 将其开发服务器缓存存储在 <code>.vitepress/cache</code> 中，并将生产构建输出存储在 <code>.vitepress/dist</code> 中。如果使用 Git，应该将它们添加到 <code>.gitignore</code> 文件中。也可以手动<a href="./../reference/site-config#outdir">配置</a>这些位置。</p></div><h3 id="the-config-file" tabindex="-1">配置文件 <a class="header-anchor" href="#the-config-file" aria-label="Permalink to &quot;配置文件 {#the-config-file}&quot;">​</a></h3><p>配置文件 (<code>.vitepress/config.js</code>) 让你能够自定义 VitePress 站点的各个方面，最基本的选项是站点的标题和描述：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// .vitepress/config.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// site-level options</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VitePress</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Just playing around.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">themeConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// theme-level options</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>还可以通过 <code>themeConfig</code> 选项配置主题的行为。有关所有配置选项的完整详细信息，请参见<a href="./../reference/site-config">配置参考</a>。</p><h3 id="source-files" tabindex="-1">源文件 <a class="header-anchor" href="#source-files" aria-label="Permalink to &quot;源文件 {#source-files}&quot;">​</a></h3><p><code>.vitepress</code> 目录之外的 Markdown 文件被视为<strong>源文件</strong>。</p><p>VitePress 使用 <strong>基于文件的路由</strong>：每个 <code>.md</code> 文件将在相同的路径被编译成为 <code>.html</code> 文件。例如，<code>index.md</code> 将会被编译成 <code>index.html</code>，可以在生成的 VitePress 站点的根路径 <code>/</code> 进行访问。</p><p>VitePress 还提供了生成简洁 URL、重写路径和动态生成页面的能力。这些将在<a href="./routing">路由指南</a>中进行介绍。</p><h2 id="up-and-running" tabindex="-1">运行 <a class="header-anchor" href="#up-and-running" aria-label="Permalink to &quot;运行 {#up-and-running}&quot;">​</a></h2><p>该工具还应该将以下 npm 脚本注入到 <code>package.json</code> 中：</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress dev docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress build docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:preview</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress preview docs</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>docs:dev</code> 脚本将启动具有即时热更新的本地开发服务器。使用以下命令运行它：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-HWqbo" id="tab-UdW-9aZ" checked="checked"><label for="tab-UdW-9aZ">npm</label><input type="radio" name="group-HWqbo" id="tab-LAaLgSn"><label for="tab-LAaLgSn">pnpm</label><input type="radio" name="group-HWqbo" id="tab-OZIlKQV"><label for="tab-OZIlKQV">yarn</label></div><div class="blocks"><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p>除了 npm 脚本，还可以直接调用 VitePress：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-6WWMd" id="tab-xNeCTYV" checked="checked"><label for="tab-xNeCTYV">npm</label><input type="radio" name="group-6WWMd" id="tab-0nQUxSF"><label for="tab-0nQUxSF">pnpm</label></div><div class="blocks"><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p>更多的命令行用法请参见 <a href="./../reference/cli">CLI 参考</a>。</p><p>开发服务应该会运行在 <code>http://localhost:5173</code>上。在浏览器中访问 URL 以查看新站点的运行情况吧！</p><h2 id="what-s-next" tabindex="-1">下一步 <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;下一步 {#what-s-next}&quot;">​</a></h2><ul><li><p>想要进一步了解 Markdown 文件是怎么映射到对应的 HTML，请继续阅读<a href="./routing">路由指南</a>。</p></li><li><p>要了解有关可以在页面上执行的操作的更多信息，例如编写 Markdown 内容或使用 Vue 组件，请参见指南的“编写”部分。一个很好的起点是了解 <a href="./markdown">Markdown 扩展</a>。</p></li><li><p>要探索默认文档主题提供的功能，请查看<a href="./../reference/default-theme-config">默认主题配置参考</a>。</p></li><li><p>如果想进一步自定义站点的外观，参见<a href="./extending-default-theme">扩展默认主题</a>或者<a href="./custom-theme">构建自定义主题</a>。</p></li><li><p>文档成形以后，务必阅读<a href="./deploy">部署指南</a>。</p></li></ul>`,40),t=[o];function r(c,i,d,u,y,C){return a(),n("div",null,t)}const m=s(p,[["render",r]]);export{b as __pageData,m as default};
