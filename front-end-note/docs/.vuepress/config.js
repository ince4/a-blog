module.exports = {
    title: 'ronn的前端笔记',
	description: '前端学习过程中积累、整理的个人笔记',
	base: '/blog/front-end-note/',
	themeConfig:{
		logo: '/animal_chara_computer_azarashi.png',
		nav: [
			{ text: '主页', link: '/' },
			{ text: '基础', link: '/base/JS基础/数据类型' },
			{ text: '实习日记', link: '/logs/' },
			{ text: 'External', link: 'http://www.ronn.top/blog/nihonngo/' },
		],
		sidebar: {
			'/base/': [
				// ['', 'JS基础/数据类型'],
				// {
				// 	title: 'HTML+CSS',
				// 	collapsable: true,
				// 	children: [
				// 		'HTML+CSS/CSS基础'
				// 	]
				// },
				{
					title: 'JS基础',
					collapsable: true,
					children: [
						'JS基础/数据类型',
						'JS基础/执行上下文和执行栈',
						'JS基础/闭包',
						'JS基础/原型链',
						'JS基础/异步编程'
					]
				},
				{
					title: 'JS实践',
					collapsable: true,
					children: [
						'JS实践/深浅拷贝',
						'JS实践/防抖、节流',
						'JS实践/Promise简易实现',
						'JS实践/图片懒加载',
						'JS实践/单例模式',
						'JS实践/观察者模式'
					]
				},
				{
					title: '浏览器',
					collapsable: true,
					children: [
					'浏览器/跨域',
					'浏览器/事件循环',
					'浏览器/浏览器渲染',
					'浏览器/浏览器缓存',
					]
				},
				{
					title: '网络基础',
					collapsable: true,
					children: [
						'网络基础/TCP协议',
						'网络基础/HTTP基础',
						'网络基础/HTTPS',
						'网络基础/XSS攻击',
						'网络基础/CSRF攻击',
					]
				},
				{
					
					title: 'Vue原理',
					collapsable: true,
					children: [
						'Vue原理/Vue基础',
						'Vue原理/响应式系统',
						'Vue原理/Virtual DOM',
						'Vue原理/EventBus',
						'Vue原理/异步更新',
						'Vue原理/Vue3.0'
					]
				},
				{
					title: '其他',
					collapsable: true,
					children: [
						'其他/Webpack基础',
						'其他/TypeScript基础',
					]
				},
				// {
				// 	title: '其他',
				// 	collapsable: true,
				// 	children: [
				// 		'其他/全局执行上下文出栈时机',
				// 		'其他/Fetch与XMLHttpRequest',
				// 	]
				// },
			],
			'/logs/': [
				['', 'About'],
				['Echarts相关', 'Echarts相关'],
				['全局执行上下文出栈时机', '全局执行上下文出栈时机'],
				['Fetch与XMLHttpRequest', 'Fetch与XMLHttpRequest'],
				['CSS-BEM命名规范', 'CSS-BEM命名规范'],
			]
		},
		head: [
			['link', { rel: 'icon', href: '/favicon.ico' }],
		],
	}
}