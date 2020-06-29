module.exports = {
    title: 'ince4的前端笔记',
	description: '记录、整理学习过程中的知识点',
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
				  '/base/JS基础/js02',
				]
			}
			
		],
		// head: [
		// 	['link', { rel: 'icon', href: '/animal_chara_computer_azarashi.png' }],
		// ],
	}
}