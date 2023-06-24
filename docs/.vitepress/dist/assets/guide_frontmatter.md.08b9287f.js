import{_ as a,o as s,c as n,V as e}from"./chunks/framework.51640bae.js";const D=JSON.parse('{"title":"Frontmatter","description":"","frontmatter":{},"headers":[],"relativePath":"guide/frontmatter.md","filePath":"guide/frontmatter.md","lastUpdated":1687622162000}'),t={name:"guide/frontmatter.md"},r=e(`<h1 id="frontmatter" tabindex="-1">Frontmatter <a class="header-anchor" href="#frontmatter" aria-label="Permalink to &quot;Frontmatter {#frontmatter}&quot;">​</a></h1><h2 id="usage" tabindex="-1">用法 <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;用法 {#usage}&quot;">​</a></h2><p>VitePress 支持在所有 Markdown 文件中使用 YAML frontmatter，并使用 <a href="https://github.com/jonschlinkert/gray-matter" target="_blank" rel="noreferrer">gray-matter</a> 解析。frontmatter 必须位于 Markdown 文件的顶部 (在任何元素之前，包括 <code>&lt;script&gt;</code> 标签)，并且需要在三条虚线之间的采用有效的 YAML 格式。例如：</p><div class="language-md line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Docs with VitePress</span></span>
<span class="line"><span style="color:#F07178;">editLink</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>许多站点或默认主题配置选项在 frontmatter 中都有相应的选项。你可以使用 frontmatter 来覆盖当前页面的特定行为。详细信息请参见 <a href="./../reference/frontmatter-config">Frontmatter Config Reference</a>。</p><p>你还可以定义自己的 frontmatter 数据，以在页面上的动态 Vue 表达式中使用。</p><h2 id="accessing-frontmatter-data" tabindex="-1">访问 Frontmatter 数据 <a class="header-anchor" href="#accessing-frontmatter-data" aria-label="Permalink to &quot;访问 Frontmatter 数据 {#accessing-frontmatter-data}&quot;">​</a></h2><p>Frontmatter 数据可以通过特殊的 <code>$frontmatter</code> 全局变量来访问：</p><p>下面的例子展示了你应该如何在 Markdown 文件中使用它：</p><div class="language-md line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Docs with VitePress</span></span>
<span class="line"><span style="color:#F07178;">editLink</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">{{ $frontmatter.title }} {#{{-$frontmatter.title-}}}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Guide content</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>你还可以使用 <a href="./../reference/runtime-api#usedata"><code>useData()</code></a> 辅助函数在 <code>&lt;script setup&gt;</code> 中访问当前页面的 frontmatter。</p><h2 id="alternative-frontmatter-formats" tabindex="-1">其他 Frontmatter 格式 <a class="header-anchor" href="#alternative-frontmatter-formats" aria-label="Permalink to &quot;其他 Frontmatter 格式 {#alternative-frontmatter-formats}&quot;">​</a></h2><p>VitePress 也支持 JSON 格式的 frontmatter，以花括号开始和结束：</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Blogging Like a Hacker</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">editLink</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,14),l=[r];function p(o,c,i,m,d,u){return s(),n("div",null,l)}const F=a(t,[["render",p]]);export{D as __pageData,F as default};