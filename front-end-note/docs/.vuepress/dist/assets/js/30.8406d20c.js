(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{384:function(a,t,s){"use strict";s.r(t);var e=s(42),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"浏览器缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[a._v("#")]),a._v(" 浏览器缓存")]),a._v(" "),s("h2",{attrs:{id:"_1、强缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、强缓存"}},[a._v("#")]),a._v(" 1、强缓存")]),a._v(" "),s("p",[a._v("在强缓存有效期内，客户端直接读取本地资源，可以直接从缓存中获取数据无需再次请求。")]),a._v(" "),s("ul",[s("li",[a._v("返回的状态码是200")])]),a._v(" "),s("h3",{attrs:{id:"expires"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[a._v("#")]),a._v(" Expires")]),a._v(" "),s("p",[a._v("该字段在 http1.0 中使用，字段的值表示缓存资源有效期。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("Expires"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Sat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("09")]),a._v(" Jun "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2018")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("08")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("13")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("56")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("GMT")]),a._v(" \n")])])]),s("blockquote",[s("p",[a._v("缺陷： 若服务器时间和本地时间不一致，可能导致缓存有效时间不准确。因此在 http1.1 及之后的版本中多使用 Cache-control 字段的 max-age 属性来控制强缓存有效时间。")])]),a._v(" "),s("h3",{attrs:{id:"cache-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[a._v("#")]),a._v(" Cache-control")]),a._v(" "),s("p",[a._v("通过 Cache-control 字段控制资源缓存，常见属性如下")]),a._v(" "),s("ul",[s("li",[a._v("max-age：强缓存的有效时间，单位为秒")]),a._v(" "),s("li",[a._v("s-maxage：代理服务器的缓存有效时间")]),a._v(" "),s("li",[a._v("public：可以被浏览器和代理服务器缓存")]),a._v(" "),s("li",[a._v("no-cache：不使用强缓存，进入协商缓存阶段")]),a._v(" "),s("li",[a._v("no-store：禁止浏览器缓存数据，每次用户请求该资源，都会向服务器发送请求下载资源")]),a._v(" "),s("li",[a._v("private ：表明响应只能被浏览器缓存，不能被代理服务器不能缓存")])]),a._v(" "),s("h2",{attrs:{id:"_2、协商缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、协商缓存"}},[a._v("#")]),a._v(" 2、协商缓存")]),a._v(" "),s("p",[a._v("若浏览器未使用强缓存，会进入协商缓存阶段。")]),a._v(" "),s("p",[a._v("协商缓存阶段在使用本地缓存之前需要先跟服务器做对比，判断本地的缓存资源是否需要更新。若本地缓存已是最新版本则可直接使用，否则客户端会将本地资源更新为服务器响应的最新资源。")]),a._v(" "),s("ul",[s("li",[a._v("若本地资源是最新的，状态码为 304")]),a._v(" "),s("li",[a._v("若本地资源需要更新的，从服务器响应中获取最新资源，状态码为 200")])]),a._v(" "),s("h3",{attrs:{id:"last-modified-与-if-modified-since"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-与-if-modified-since"}},[a._v("#")]),a._v(" Last-Modified 与 If-Modified-Since")]),a._v(" "),s("p",[a._v("采用资源最后修改时间来判断，单位精度秒")]),a._v(" "),s("ul",[s("li",[a._v("Last-Modified（响应头）：浏览器第一次给服务器发送请求后，服务器会在响应头中加上Last-Modified字段（在之后的请求中作为 If-Modified-Since 的值）。")]),a._v(" "),s("li",[a._v("If-Modified-Since（请求头）：发起协商，把本地记录的文件更新时间传给服务器（请求头中携带If-Modified-Since字段），服务器将其与服务器上"),s("strong",[a._v("资源最后修改时间")]),a._v("进行判断比较")])]),a._v(" "),s("blockquote",[s("p",[a._v("缺陷：该判断方式是 http1.0 的产物，因为时间精度是秒，若文件的更新频率在秒级以内，会导致判断结果不准确。")])]),a._v(" "),s("h3",{attrs:{id:"etag-与-if-none-match"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etag-与-if-none-match"}},[a._v("#")]),a._v(" ETag 与 If-None-Match")]),a._v(" "),s("p",[a._v("ETag 是服务器根据当前文件的内容生成的唯一标识。文件内容改动后 ETag 的值也会变化，服务器通过响应头把这个值给浏览器判断文件是否一致。")]),a._v(" "),s("ul",[s("li",[a._v("ETag（响应头）：服务器根据内容生成唯一的字符串标识")]),a._v(" "),s("li",[a._v("If-None-Match（请求头）：客户端发起协商，将本地缓存文件的 ETag 值传给服务器进行判断比较。")])]),a._v(" "),s("p",[a._v("若协商缓存同时支持 Last-Modified 和 ETag 的方式，优先根据 Etag 判断。")]),a._v(" "),s("h2",{attrs:{id:"_3、总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、总结"}},[a._v("#")]),a._v(" 3、总结")]),a._v(" "),s("h3",{attrs:{id:"流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[a._v("#")]),a._v(" 流程")]),a._v(" "),s("img",{attrs:{src:a.$withBase("/浏览器/缓存.webp")}}),a._v("\n- 如果强缓存可用，直接使用\n- 若强缓存不可用，进入协商缓存。发送 HTTP 请求，服务器根据请求头中的数据检查资源是否更新\n    - 若资源更新，返回资源和200状态码\n    - 否则，返回304，告诉浏览器直接从缓存获取资源\n"),s("h3",{attrs:{id:"存储位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储位置"}},[a._v("#")]),a._v(" 存储位置")]),a._v(" "),s("ul",[s("li",[a._v("Service Worker(运行在浏览器背后的独立线程)")]),a._v(" "),s("li",[a._v("Memory Cache")]),a._v(" "),s("li",[a._v("Disk Cache")]),a._v(" "),s("li",[a._v("Push Cache")]),a._v(" "),s("li",[a._v("网络请求")])])])}),[],!1,null,null,null);t.default=r.exports}}]);