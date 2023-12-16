# es6

## 报菜名 
Symbol、let、const、Promise、async&await、module、class、可选链运算符

## Set、Map、WeakSet、WeakMap
set 类似数组，但所有成员的值唯一
map 类似对象，但支持不同数据类型的作为键，而非仅字符串。
WeakSet和WeakMap只接受引用类性和 Symbol 值作为成员/键名，不接受其他类型的值作为键名
WeakSet和WeakMap对其成员/键弱引用，不会阻止垃圾回收，无需手动清除，减小内存泄漏风险

引用类型或symbol、无需遍历时 weak更适合

## Generator
是一种异步编程的解决方案
Generator 函数有多种理解角度。语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。
async为其语法糖

## 模块化


<img :src="$withBase('/JS基础/v2-d261c2f59e5a53cdde7d143ef206f802_1440w.webp')">


变量和方法不容易维护，容易污染全局作用域
加载资源的方式通过script标签从上到下。
依赖的环境主观逻辑偏重，代码较多就会比较复杂。
大型项目资源难以维护，特别是多人合作的情况下，资源的引入会让人奔溃

CommonJS（nodejs 服务端） 和 AMDCMD(浏览器) 规范
ES6 在语言标准的层面上，实现了Module，即模块功能，完全可以取代 CommonJS和 AMD规范，成为浏览器和服务器通用的模块解决方案

export & import
module.export & require

模块是同步加载的，即只有加载完成，才能执行后面的操作
模块在首次执行后就会缓存，再次加载只返回缓存结果，如果想要再次执行，可清除缓存
require返回的值是被输出的值的拷贝，模块内部的变化也不会影响这个值

esm 是编译时加载，commonjs是运行时

