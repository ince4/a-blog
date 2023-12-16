# CommonJs与Esm

之前的几种模块化方案都是前端社区自己实现的，只是得到了大家的认可和广泛使用
ES6 在语言标准的层面上，实现了模块功能，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。

CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载，有一个独立模块依赖的解析阶段。

```javascript
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};

// main.js
var mod = require('./lib');

console.log(mod.counter);  // 3
mod.incCounter();
console.log(mod.counter); // 3
```