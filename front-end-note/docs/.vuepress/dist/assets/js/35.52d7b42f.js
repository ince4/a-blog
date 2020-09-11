(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{373:function(_,v,t){"use strict";t.r(v);var a=t(42),r=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"tcp协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp协议"}},[_._v("#")]),_._v(" TCP协议")]),_._v(" "),t("h2",{attrs:{id:"_1、tcp-ip-通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、tcp-ip-通信"}},[_._v("#")]),_._v(" 1、TCP/IP 通信")]),_._v(" "),t("p",[_._v("TCP/IP协议指在 IP 协议的通信过程中，使用到的协议族的统称。")]),_._v(" "),t("p",[_._v("TCP/IP 协议族按层次分别分为以下 4 层")]),_._v(" "),t("img",{attrs:{src:_.$withBase("/网络基础/TCPIP模型")}}),_._v(" "),t("ul",[t("li",[_._v("应用层：决定了向用户提供应用服务时通信的活动")]),_._v(" "),t("li",[_._v("传输层：对上层应用层提供处于网络连接中的两台计算机之间的数据传输")]),_._v(" "),t("li",[_._v("网络层：处理在网络上流动的数据包")]),_._v(" "),t("li",[_._v("链路层：处理连接网络的硬件部分。")])]),_._v(" "),t("h2",{attrs:{id:"_2、tcp协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、tcp协议"}},[_._v("#")]),_._v(" 2、TCP协议")]),_._v(" "),t("p",[t("strong",[_._v("TCP 协议位于传输层，提供面向连接的可靠字节流服务")]),_._v("。TCP 协议为了更容易传送大数据才把数据分割，而且 TCP 协议能够确认数据最终是否送达到对方（三次握手）。")]),_._v(" "),t("blockquote",[t("ul",[t("li",[_._v("面向连接指的是客户端和服务器的连接，在双方互相通信之前，TCP 需要三次握手建立连接")]),_._v(" "),t("li",[_._v("字节流服务指，为了方便传输，将大块数据分割成以报文段（segment）为单位的数据包进行管理")]),_._v(" "),t("li",[_._v("可靠的传输服务指，能够把数据准确可靠地传给对方（确认数据包按顺序到达）")])])]),_._v(" "),t("h2",{attrs:{id:"_3、三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、三次握手"}},[_._v("#")]),_._v(" 3、三次握手")]),_._v(" "),t("p",[_._v("Client 端和 Server 端建立稳定 TCP 连接的发送三个包的过程。")]),_._v(" "),t("img",{attrs:{src:_.$withBase("/网络基础/三次握手.png")}}),_._v(" "),t("blockquote",[t("ul",[t("li",[_._v("Sequence number，这个序号保证了 TCP 传输的报文都是有序的，对端可以通过序号顺序的拼接报文")]),_._v(" "),t("li",[_._v("ACK=1：该字段为一表示确认号字段有效。此外，TCP 还规定在连接建立后传送的所有报文段都必须把 ACK 置为一。")]),_._v(" "),t("li",[_._v("SYN=1：当SYN=1，ACK=0时，表示当前报文段是一个连接请求报文。当SYN=1，ACK=1时，表示当前报文段是一个同意建立连接的应答报文。")])])]),_._v(" "),t("p",[_._v("建立连接前三次握手的目的是保证双方收发能力正常。若次数小于3次，无法防止已经失效的连接请求报文段突然又传到服务端而产生错误（服务器接受到过期的数据包建立连接造成资源浪费）。")]),_._v(" "),t("h2",{attrs:{id:"_4、四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、四次挥手"}},[_._v("#")]),_._v(" 4、四次挥手")]),_._v(" "),t("p",[_._v("Client 端和 Server 端关闭 TCP 连接的发送四个包的过程。")]),_._v(" "),t("img",{attrs:{src:_.$withBase("/网络基础/四次挥手.webp")}}),_._v("\n> FIN=1：该字段为一表示此报文段是一个释放连接的请求报文\n"),t("ol",[t("li",[_._v("第一次挥手客户端设置seq和 ACK ,向服务器发送一个 FIN=1报文段。此时，（第一次挥手，FIN=1，seq=u）客户端进入 FIN_WAIT 状态，表示客户端没有数据要发送给服务端了。")]),_._v(" "),t("li",[_._v("第二次挥手服务端收到了客户端发送的 FIN 报文段，向客户端回了一个 ACK 报文段。")]),_._v(" "),t("li",[_._v("第三次挥手服务端向客户端发送FIN 报文段，请求关闭连接，同时服务端进入 LAST_ACK 状态。")]),_._v(" "),t("li",[_._v("第四次挥手客户端收到服务端发送的 FIN 报文段后，向服务端发送 ACK 报文段,然后客户端进入 TIME_WAIT 状态。服务端收到客户端的 ACK 报文段以后，就关闭连接。此时，客户端等待 2MSL（指报文在网络中最大的存活时间）后依然没有收到回复，则说明服务端已经正常关闭，这样客户端就可以关闭连接了。")])]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("第四次挥手后等待 2MSL 的意义")]),t("br"),_._v("\n确保服务端未收到 Ack 报文后重传的 Fin 报文可以到达。若客户端不进入 TIME-WAIT 状态进行等待而是直接关闭，有可能因为网络问题确认应答未到达服务端而导致服务端不能关闭。")])]),_._v(" "),t("h2",{attrs:{id:"_5、tcp协议与udp协议的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、tcp协议与udp协议的区别"}},[_._v("#")]),_._v(" 5、TCP协议与UDP协议的区别")]),_._v(" "),t("p",[_._v("TCP 与 UDP 都是传输层上的协议。\nTCP是一个面向连接的、可靠的、基于字节流的传输层协议。\nUDP是一个面向无连接的传输层协议。")]),_._v(" "),t("h3",{attrs:{id:"tcp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[_._v("#")]),_._v(" TCP:")]),_._v(" "),t("ul",[t("li",[_._v("面向连接（需要三次握手建立连接）")]),_._v(" "),t("li",[_._v("面向字节流（发送端将数据分割发送）")]),_._v(" "),t("li",[_._v("有状态")]),_._v(" "),t("li",[_._v("保证可靠交付")]),_._v(" "),t("li",[_._v("具备拥塞控制")]),_._v(" "),t("li",[_._v("点对点传播")]),_._v(" "),t("li",[_._v("有序（原因在于面向字节流）")])]),_._v(" "),t("h3",{attrs:{id:"udp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#udp"}},[_._v("#")]),_._v(" UDP:")]),_._v(" "),t("ul",[t("li",[_._v("无连接（通信双方不需要事先建立通信线路）")]),_._v(" "),t("li",[_._v("面向数据报（发送端调用了几次 write，接收端必须用相同次数的read读完）")]),_._v(" "),t("li",[_._v("无状态")]),_._v(" "),t("li",[_._v("不保证可靠交付")]),_._v(" "),t("li",[_._v("不具备拥塞控制")]),_._v(" "),t("li",[_._v("广播、多播")]),_._v(" "),t("li",[_._v("无序")]),_._v(" "),t("li",[_._v("传输速度较快")])]),_._v(" "),t("p",[_._v("UDP 是报文的搬运工，不需要建立完全可靠的链接，不保证数据的可靠性，因为协议控制项比较少，且报文头部简单，报文体积相对要小，速度上相比更快，实时性更高，比如电话会议、多媒体数据流等场景就常采用 UDP。")])])}),[],!1,null,null,null);v.default=r.exports}}]);