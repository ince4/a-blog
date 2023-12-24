# Vue3.0

## 1、响应式
Vue2.0 的响应式系统是基于 Object.defineProperty 实现的代理
>- 监听不到对象属性的增删、数组元素和长度的变化（vue.set、vue.delete、数组原型push ...）
>- Vue 实例初始化的时候对data进行深度监听 性能开销大

Vue3.0 采用了 ES6 的 Proxy 来代替 Object.defineProperty
>- 可以做到监听对象属性的增删和数组元素和长度的修改
>- 不用初始化的时候遍历data进行响应式初始化（因为proxy可以直接监听外层对象，而不是key），而是会在用到的时候才去监听（触发 getter）。
>- 还可以监听 Map、Set、WeakSet、WeakMap 等数据结构

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


## 2、Composition API
将某个逻辑关注点相关的代码全都放在一个函数里，这样当需要修改一个功能时，就不再需要在文件中跳来跳去

```javascript
// Vue3.0 中通过 Composition API 配置组件
function useCount() {
    let count = ref(10);
    let double = computed(() => {
        return count.value * 2;
    });

    const handleConut = () => {
        count.value = count.value * 2;
    };

    console.log(count);

    return {
        count,
        double,
        handleConut,
    };
}
```

## 3、Diff算法优化
vue3在diff算法中相比vue2增加了静态标记，不会比较标记了静态节点的标签

## 4、源码体积缩小
移除了一些不常用的API
使用了TreeShanking，仅打包被使用的功能代码（借助ES6模块的静态编译，在编译时就能确定模块的依赖关系，以及输入和输出的变量）


## 4、其他新变化
- 切换到TypeScript
- Virtual DOM 重构
- 编译时优化，如作用域插槽改成函数方式，只会影响子组件的重新渲染，提升了渲染的性能。
- template 模板内可以有多个根标签不会报错。

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