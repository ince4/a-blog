# Vue3.0

## 1、Vite构建项目
``` shell
$ npm init vite-app <project-name>
$ cd <project-name>
$ npm install
$ npm run dev

# 章节用例项目的依赖版本
# "@vue/composition-api": "^1.0.0-beta.6",
# "vue": "^3.0.0-rc.1"
```

> Vite 是一个由原生 ESM 驱动的 Web 开发构建工具。在开发环境下基于浏览器原生 ES imports 开发，在生产环境下基于 Rollup 打包。  
> 它主要具有以下特点：
>- 快速的冷启动
>- 即时的模块热更新
>- 真正的按需编译

## 2、Composition API
Vue3.0 中不总是需要通过选项来组织代码，而是可以将代码组织为处理特定功能的函数。使得在组件之间甚至组件之外逻辑的提取和重用变得更加简单。

```vue
Vue2.0 中配置组件
<script>
export default {
	name: 'App',
	data: {
	    // ...
	},
	computed: {
	    // ...
	},
	methods: {
	    // ...
	}
}
</script>

Vue3.0 中通过 Composition API 配置组件
<template>
	<button @click="handleClick"> {{ state.count }} </button>
</template>
<script>
import { reactive } from "vue"
export default {
	name: 'App',
	components: {},
	setup(props, context) {
		const state = reactive({
			count: 0
		})  
	
		function handleClick() {
			state.count ++
		}

		return {
			state,
			handleClick
		}
	}
}
</script>
```

### setup 函数
setup 函数 Vue 组件是新的入口函数，会在beforeCreate 和 created 之间运行，进行组件选项的初始化。  
setup 函数中的两个形参分别是接受父组件传递属性值的 props 和作为组件实例上下文对象的context（如 context.emit 相当于2.0的 this.$emit）。  
setup需要返回一个对象或者函数。返回对象会被赋值给组件实例的renderContext，在组件的模板作用域可以被访问到，类似data的返回值。返回函数会被当做是组件的render。

### reactive与ref
**reactive()** 函数接收一个普通的对象，返回一个响应的数据对象。 

```javascript
setup() {
	const state = reactive({ count: 0 }) 
    return {
		state
	}
}
```
ref() 函数用来根据给定值创建一个响应式的数据对象，ref() 函数的调用返回值是一个对象，这个对象上只包含一个 value 属性。

```javascript
setup() {
    const count = ref(0)
        return {
            count
        }
}
```

**toRefs()** 函数可以将 reactive() 创建出来的响应式对象转为 ref 对象，方便在 template 上直接使用

```vue
<template>
	<!-- <div> {{ state.count }} </div> -->
	<div> {{ count }} </div>
</template>

<script>
import { reactive, toRefs } from "vue"
export default {
	setup() {
		const state = reactive({ count: 0 }) 
		return {
			// state
			...toRefs(state)
		}
	}
}
</script>
```

### 生命周期钩子
- 新版中的生命周期钩子需要按需导入，并且只能写setup()函数中。
	- beforeCreate -> setup
	- created -> setup
	- beforeMount -> onBeforeMount
	- mounted -> onMounted
	- beforeUpdate -> onBeforeUpdate
	- updated -> onUpdated
	- beforeDestroy -> onBeforeUnmount
	- destroyed -> onUnmounted
	- errorCaptured -> onErrorCaptured

## 3、响应式
Vue2.0 的响应式系统是基于 Object.defineProperty 实现的代理，能够监听数据对象的变化，但是监听不到对象属性的增删、数组元素和长度的变化。同时会在 Vue 实例初始化的时候把所有的 Observer 都建立好并进行深度监听，才能观察到数据对象属性的变化。

Vue3.0 采用了 ES6 的 Proxy 来代替 Object.defineProperty，性能更好，可以做到监听对象属性的增删和数组元素和长度的修改，还可以监听 Map、Set、WeakSet、WeakMap 等数据结构。同时还实现了惰性的监听，不会在初始化的时候创建所有的 Observer，而是会在用到的时候才去监听（触发 getter）。

```javascript
function reactive (target = {}) {
	if (typeof target !== 'object' || target == null) {
		return target
	}

	const proxyConfig = {}

	const observed = new Proxy(target, proxyConfig)
	return observed
}
```

## 4、其他新变化
- 切换到TypeScript
- Virtual DOM 重构
- 编译时优化，如作用域插槽改成函数方式，只会影响子组件的重新渲染，提升了渲染的性能。
- template 模板内可以有多个根标签不会报错。