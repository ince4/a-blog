# Virtual DOM
Vue template 经过解析编译后会得到 render 函数，render 函数执行后返回 VNode 对象

## 1、Virtual DOM概念
Virtual DOM 是以 JS 对象的方式来描述真实 DOM 对象，相当于在 JS 和 DOM 之间做了一个缓存。
与直接操纵真实 DOM 相比，操作 JS 对象的性能开销更小，可以以此减少对真实 DOM 的操作以减少回流重绘的次数。除此之外使用 Virtual DOM 还有支持跨平台开发、提高开发效率等优点。

```html
<div id="container" class="container">
	<p>abc</p>
</div>
```

```javascript
// 用 JS 对象的方式描述真实 DOM 结构
{
	tag: 'div',
	props: {
		className: 'container',
		id: 'container'
	},
	text: undefined,
	children: [
		{
			tag: 'p'
			text: 'abc'
		}
	]
}
```

## 2、patch
Vue 响应式系统中当依赖项被修改，触发 setter 后，会通知 watcher 进行视图更新。这个视图更新的过程其实就是（通过 diff 算法）对新旧 VNode 进行比较得出差异并根据这些差异生成新的 DOM 节点，重新渲染到视图上。  
上述对比新旧 Vnode 将差异更新到视图上的过程就是 patch 的过程。

### diff算法
diff 算法是 patch 的核心，用来对比得出两个 VNode 对象之间的差异。  

>- 1、只比较同一层级 不跨级比较
>- 2、tag不同直接删掉重建， 不深度比较
>- 3、tag和key都相同则认为是相同节点

<img :src="$withBase('/Vue原理/diff.webp')">

### v-for中不推荐index作为key值的原因
diff 算法中 key 的值是判断两个节点是否相同的依据之一。将 index 作为 key 值不能确保其唯一性,存在渲染效率降低或 bug 产生的风险。

举例：以下例子中若从数组中间删除一项，后续 item 对应的 index 值会发生改变，不能直接复用后面的 DOM 元素，降低了渲染效率。
```javascript
<li v-for=(index, item) of ['a', 'b', 'c', 'd', 'e'] :key="index">
	{{ item }}
</li>
```