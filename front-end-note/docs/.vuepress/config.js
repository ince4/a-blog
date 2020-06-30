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
				]
			}
			
		],
		// head: [
		// 	['link', { rel: 'icon', href: '/animal_chara_computer_azarashi.png' }],
		// ],
	}
}