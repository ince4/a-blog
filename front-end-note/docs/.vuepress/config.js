module.exports = {
    title: 'ince4的前端笔记',
	description: '前端学习过程中积累、整理的个人笔记',
	themeConfig:{
		logo: '/animal_chara_computer_azarashi.png',
		nav: [
			{ text: '主页', link: '/' },
			{ text: '基础', link: '/base/' },
			{ text: 'External', link: 'https://google.com' },
		],
		sidebar: [
			['/base/', 'about'],
			{
				title: 'JS基础',
				collapsable: true,
				children: [
				  '/base/JS基础/数据类型',
				  '/base/JS基础/执行上下文和执行栈',
				  '/base/JS基础/闭包',
				  '/base/JS基础/原型链',
				  '/base/JS基础/异步编程'
				]
			},
			{
				title: 'JS实践',
				collapsable: true,
				children: [
				  '/base/JS实践/深浅拷贝',
				  '/base/JS实践/防抖、节流',
				  '/base/JS实践/Promise简易实现',
				  '/base/JS实践/观察者模式'
				]
			},
			{
				title: '浏览器',
				collapsable: true,
				children: [
					'/base/浏览器/跨域',
				  '/base/浏览器/事件循环',
				  '/base/浏览器/浏览器渲染',
				  '/base/浏览器/浏览器缓存',
				]
			},
			{
				title: 'HTTP协议',
				collapsable: true,
				children: [
				  '/base/HTTP协议/TCP协议',
				  '/base/HTTP协议/HTTP基础',
				  '/base/HTTP协议/HTTPS',
				  '/base/HTTP协议/XSS攻击',
				  '/base/HTTP协议/CSRF攻击',
				]
			}
			
		],
		head: [
			['link', { rel: 'icon', href: '/favicon.ico' }],
		],
	}
}