module.exports = {
    title: 'ince4的前端笔记',
	description: '记录、整理学习过程中的知识点',
	themeConfig:{
		nav: [{text: "", link: ""},
		],
	},
	themeConfig:{
		// "/base/":[
		// 	["", "前端"],
		// 	{
		// 	  	title: "js",
		// 	  	name: "js",
		// 	  	collabsable: false,
		// 	  	children: [
		// 			["js/js", "js"],
		// 			['js/vue', "vue"]
		// 	  	]
		// 	}
		// ]
		// sidebar: ['/base', '/base/js']
		sidebar: [
			{
				title: 'Js',
				collapsable: true,
				children: [
				  '/base/js/',
				  '/base/js/js01',
				  '/base/js/js02',
				]
			}
			
		]
	}
}