module.exports = {
    title: 'ince4の日本語メモ',
	description: 'ポケモンマスターを目指せ（',
	themeConfig:{
		logo: '/sabaku_hone.png',
		nav: [
			{ text: '主页', link: '/' },
			{ text: '基础', link: '/base/' },
			{ text: 'External', link: 'https://google.com' },
		],
		sidebar: [
			{
				title: '単語',
				collapsable: true,
				children: [
				  '/base/単語/動詞の形',
				  '/base/単語/数字'
				]
			},
			['/base/敬語', '敬語']
		],
		// head: [
		// 	['link', { rel: 'icon', href: '/animal_chara_computer_azarashi.png' }],
		// ],
	}
}