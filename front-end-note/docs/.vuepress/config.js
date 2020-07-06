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
				  '/base/JS基础/闭包',
				  '/base/JS基础/原型链',
				  '/base/JS基础/this关键字',
				  '/base/JS基础/异步编程',
				  '/base/JS基础/事件循环',
				  '/base/JS基础/部分api原理',
				]
			}
			
		],
		// head: [
		// 	['link', { rel: 'icon', href: '/animal_chara_computer_azarashi.png' }],
		// ],
	}
}