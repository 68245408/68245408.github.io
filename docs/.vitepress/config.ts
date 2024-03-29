import type { UserConfig } from 'vitepress'
import { defineConfig } from 'vitepress'
// import { pagefindPlugin, chineseSearchOptimize } from 'vitepress-plugin-pagefind'
import pkg from 'vitepress/package.json'
import mdFootnote from 'markdown-it-footnote'
import mdTaskList from 'markdown-it-task-lists'

// export default defineConfig({
// 	themeConfig: {
// 		algolia: {
// 			appId: '...',
// 			apiKey: '...',
// 			indexName: '...',
// 		},
// 	},
// })
const config = defineConfig({
	vite: {
		plugins: [
			// pagefindPlugin({
			// 	btnPlaceholder: '搜索',
			// 	placeholder: '搜索文档',
			// 	emptyText: '空空如也',
			// 	heading: '共: {{searchResult}} 条结果',
			// 	// customSearchQuery: chineseSearchOptimize,
			// 	customSearchQuery(input) {
			// 		// 将搜索的每个中文单字两侧加上空格
			// 		return input
			// 			.replace(/[\u4e00-\u9fa5]/g, ' $& ')
			// 			.replace(/\s+/g, ' ')
			// 			.trim()
			// 	},
			// }),
		],
	},
	base: '/',
	lang: 'zh-CN',
	// 网站标题，左上角以及meta标题
	title: '刚哥的主页',
	description: '一个老程序员的主页',
	cleanUrls: true,
	// 是否忽略死链
	ignoreDeadLinks: false,
	// 最后更新于 开关
	lastUpdated: true,
	head: [
		['link', { rel: 'icon', href: '/logo.svg' }],
		['meta', { name: 'google-site-verification', content: 'Wzz07XeBKMnNRNwUcsw6hEgpGoTkggTxORUtLRm6rns' }],
	],
	// markdown配置
	markdown: {
		lineNumbers: true,
		// linkify: false,
		config: (md) => {
			md.use(mdFootnote)
			md.use(mdTaskList)
		},
	},
	//  主题配置
	themeConfig: {
		darkModeSwitchLabel: '主题',
		sidebarMenuLabel: '菜单',
		returnToTopLabel: '回到顶部',
		langMenuLabel: '多语言',
		// aside: false,
		outlineTitle: '当前页',
		// 显示层级
		// outline: 'deep',
		logo: '/logo.svg',
		lastUpdatedText: '最近更新时间',
		siteTitle: '刚哥的主页',
		// siteTitle: false, // 不显示标题
		// 上一页下一页文本
		docFooter: {
			prev: '上一篇',
			next: '下一篇',
		},
		// 顶部导航nav
		nav: [
			{ text: '本站怎么建', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
			{ text: 'Rust', link: '/rust/index', activeMatch: '/rust/' },
			{ text: '其他', link: '/other/index', activeMatch: '/rust/' },
			// {
			// 	text: pkg.version,
			// 	items: [
			// 		// { text: 'itemA', link: '/item-1' },
			// 		{ text: '更新日志', link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md' },
			// 		{ text: '贡献', link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md' },
			// 	],
			// },
		],
		// 侧边导航

		sidebar: {
			'/guide/': sidebarGuide(),
			'/rust/': sidebarRust(),
			'/other/': sidebarOther(),
		},
		// 社交媒体跳转
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/68245408/' },
			// { icon: 'twitter', link: '...' },
			// 还可以自定义icon
			// {
			//   icon: {
			//     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
			//   },
			//   link: '...'
			// }
		],
		// 每个页面页脚的编辑此页  :path  为当前路由
		editLink: {
			text: '在GitHub上编辑此页',
			pattern: 'https://github.com/68245408/68245408/edit/main/docs/:path',
		},

		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2023-present Wangweigang',
		},
		// carbonAds: {
		// 	code: 'CEBDT27Y',
		// 	placement: 'vuejsorg',
		// },
		search: {
			provider: 'local',
		},

		// algolia: {
		// 	appId: '7WHRITCBT0',
		// 	apiKey: '066b52245563aa4ce21dad2b4c4b96c4',
		// 	indexName: 'vitepressCN',
		// 	placeholder: '请输入关键词',
		// 	buttonText: '搜索',
		// },
	},

	buildEnd(siteConfig) {
		// console.log(siteConfig)
	},
	transformHead(ctx) {
		// console.log(1111, ctx)
	},
})
function sidebarGuide() {
	return [
		// 匹配不同路由，侧边导航有所变化，如果没有多页面需求，可以只写一个数组
		// link 字段以 / 开头，该根目录为 /docs/ 目录
		{
			text: '介绍',
			// 是否可收起
			// 初始折叠状态 true 为折叠
			collapsed: true,
			items: [
				{ text: '什么是 VitePress?', link: '/guide/what-is-vitepress' },
				{ text: '快速开始', link: '/guide/getting-started' },
				{ text: '路由', link: '/guide/routing' },
				{ text: '部署', link: '/guide/deploy' },
			],
		},
		{
			text: '编写',
			collapsed: true,
			items: [
				{ text: 'Markdown 基础语法', link: '/guide/markdown-base' },
				{ text: 'Markdown 扩展', link: '/guide/markdown' },
				{ text: '静态资源处理', link: '/guide/asset-handling' },
				{ text: 'Frontmatter', link: '/guide/frontmatter' },
				{ text: '在 Markdown 中 使用 Vue', link: '/guide/using-vue' },
				{ text: '国际化', link: '/guide/i18n' },
			],
		},
		{
			text: '自定义',
			collapsed: true,
			items: [
				{ text: '使用自定义主题', link: '/guide/custom-theme' },
				{ text: '扩展默认主题', link: '/guide/extending-default-theme' },
				{ text: '构建时数据加载', link: '/guide/data-loading' },
				{ text: 'SSR 兼容性', link: '/guide/ssr-compat' },
				{ text: '连接到 CMS', link: '/guide/cms' },
			],
		},
		{
			text: '实验性的',
			collapsed: true,
			items: [
				{
					text: 'MPA Mode',
					link: '/guide/mpa-mode',
				},
			],
		},
		// {
		// 	text: '迁移',
		// 	collapsed: false,
		// 	items: [
		// 		{
		// 			text: '从 VuePress 迁移',
		// 			link: '/guide/migration-from-vuepress',
		// 		},
		// 		{
		// 			text: '从 VitePress 0.x 迁移',
		// 			link: '/guide/migration-from-vitepress-0',
		// 		},
		// 	],
		// },
		{
			text: '参考',
			items: [
				{ text: '站点配置', link: '/reference/site-config' },
				{ text: 'Frontmatter 配置', link: '/reference/frontmatter-config' },
				{ text: 'Runtime API', link: '/reference/runtime-api' },
				{ text: 'CLI', link: '/reference/cli' },
				{
					text: '默认主题',
					// collapsed: true,
					items: [
						{ text: '概览', link: '/reference/default-theme-config' },
						{ text: '导航栏', link: '/reference/default-theme-nav' },
						{ text: '侧边栏', link: '/reference/default-theme-sidebar' },
						{ text: '主页', link: '/reference/default-theme-home-page' },
						{ text: '页脚', link: '/reference/default-theme-footer' },
						{ text: '布局', link: '/reference/default-theme-layout' },
						{ text: '徽标', link: '/reference/default-theme-badge' },
						{ text: '团队', link: '/reference/default-theme-team-page' },
						{ text: '上（下）一篇', link: '/reference/default-theme-prev-next-links' },
						{ text: '编辑链接', link: '/reference/default-theme-edit-link' },
						{ text: '最近更新时间', link: '/reference/default-theme-last-updated' },
						{ text: '搜索', link: '/reference/default-theme-search' },
						{ text: 'Carbon Ads', link: '/reference/default-theme-carbon-ads' },
					],
				},
			],
		},
	]
}

function sidebarRust() {
	return [
		{
			text: '概述',
			items: [
				{ text: '第一页', link: '/rust/index' },
				{
					text: '第一章',
					// collapsed: true,
					items: [
						{ text: '第一节', link: '/rust/chapter1' },
						{ text: '如何进行nodejs多版本管理', link: '/other/index' },
					],
				},
			],
		},
	]
}
function sidebarOther() {
	return [
		{
			text: '其他内容',
			items: [
				{ text: 'Windows下多版本NodeJS的实现', link: '/other/index' },
				{ text: '常用在线文档平台开源项目收藏', link: '/other/doc' },
				// {
				// 	text: '第一章',
				// 	// collapsed: true,
				// 	items: [
				// 		{ text: '第一节', link: '/rust/chapter1' },
				// 		{ text: '如何进行nodejs多版本管理', link: '/other/index' },
				// 	],
				// },
			],
		},
	]
}

export default config
