// const fs = require('fs')
// const path = require('path')
// const pagesPath = path.resolve(__dirname, '../pages')

// const pages = fs.readdirSync(pagesPath);
// const sidebar = {}

// pages.map(item => {
// 	const primaryDirectory = []
// 	sidebar[`/${item}/`] = primaryDirectory

// 	let catalogues = fs.readdirSync(`${pagesPath}/${item}`);
//   catalogues = catalogues.filter(item => item !== 'index.md')

// 	catalogues.map(secondFileName => {
// 		// if (secondFileName.includes('.md')) {
// 			// primaryDirectory.push({
// 			// 	title: secondFileName,
// 			// 	collapsable: secondFileName,
// 			// 	children: secondFileName,
// 			// })
// 		// } else {
// 			const content = fs.readdirSync(`${pagesPath}/${item}/${secondFileName}`);

// 			primaryDirectory.push({
// 				title: secondFileName,
// 				collapsable: true,
// 				children: content.map(item => `${secondFileName}/${item}`),
// 			})
// 		// }
// 	})
// })

module.exports = {
  title: "ronn前端笔记",
  description: "积累、整理的部分前端知识点个人笔记",
  base: "/ronn-blog/",
  themeConfig: {
    logo: "/animal_chara_computer_azarashi.png",
    nav: [
      { text: "主页", link: "/" },
      { text: "基础知识", link: "/pages/base/JS基础/数据类型" },
      { text: "代码原理", link: "/pages/code/" },
      { text: "External", link: "http://www.ronn.top/blog/nihonngo/" },
    ],
    sidebar: {
      "/pages/base/": [
        {
          title: "JS基础",
          collapsable: true,
          children: ["JS基础/数据类型", "JS基础/执行上下文和执行栈", "JS基础/闭包", "JS基础/原型链", "JS基础/异步编程", "JS基础/es6",  "JS基础/垃圾回收和内存泄漏"],
        },
        {
          title: "JS实践",
          collapsable: true,
          children: [
            "JS实践/深浅拷贝",
            "JS实践/防抖、节流",
            "JS实践/Promise简易实现",
            "JS实践/图片懒加载",
            "JS实践/单例模式",
            "JS实践/观察者模式",
            "JS实践/实现"
          ],
        },
        {
          title: "浏览器",
          collapsable: true,
          children: ["浏览器/跨域", "浏览器/事件循环", "浏览器/浏览器渲染", "浏览器/浏览器缓存"],
        },
        {
          title: "网络基础",
          collapsable: true,
          children: [
            "网络基础/TCP协议",
            "网络基础/HTTP基础",
            "网络基础/HTTPS",
            "网络基础/XSS攻击",
            "网络基础/CSRF攻击",
            "网络基础/WebSocket",
          ],
        },
        {
          title: "Vue原理",
          collapsable: true,
          children: [
            "Vue原理/Vue基础",
            "Vue原理/响应式系统",
            "Vue原理/Virtual DOM和Diff算法",
            "Vue原理/EventBus",
            "Vue原理/异步更新",
            "Vue原理/Vue3.0",
          ],
        },
        {
          title: "HTML+CSS",
          collapsable: true,
          children: [
            "HTML+CSS/bfc",
          ],
        },
        {
          title: "其他",
          collapsable: true,
          children: [
            "其他/Webpack基础",
            "其他/TypeScript基础",
            "其他/Fetch与XMLHttpRequest",
            "其他/CSS-BEM命名规范",
            "其他/全局执行上下文出栈时机",
          ],
        },
      ],
      // "/pages/code/": [
      //   ["", "About"],
      //   ["Echarts相关", "Echarts相关"],
      //   ["全局执行上下文出栈时机", "全局执行上下文出栈时机"],
      //   ["Fetch与XMLHttpRequest", "Fetch与XMLHttpRequest"],
      //   ["CSS-BEM命名规范", "CSS-BEM命名规范"],
      // ],
    },
    head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  },
};
