# Vue基础

## 1、生命周期

<details style="margin-top:20px">
  <summary style="color: #494949">图示</summary>
  <img :src="$withBase('/Vue原理/lifecycle.png')" width="600px">
</details>

### beforeCreate
在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。此时 props 或者 data 中的数据尚未初始化，无法访问。

### created
在实例创建完成后被立即调用。数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el property 目前尚不可用。

### beforeMount
在挂载开始之前被调用：相关的 render 函数首次被调用。

### mounted
实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内。

### beforeUpdate
数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。

### updated
由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩child 。
当这个钩child 被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。

### beforeDestroy
实例销毁之前调用。在这一步，实例仍然完全可用。

### destroyed
实例销毁后调用。该钩child 被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的child 实例也都被销毁。

### activated
被 keep-alive 缓存的组件激活时调用。

### deactivated
被 keep-alive 缓存的组件停用时调用。


parent beforeCreate->parent created->parent beforeMount->child beforeCreate->child created->child beforeMount->child mounted->parent mounted

> 组件加载渲染、更新、销毁过程中祖先组件会先于子孙组件触发 beforeCreate、beforeUpdate、beforeDestroy，而子组件会先于祖先组件触发 mounted、updated、destroyed

## 2、组件通信
根据使用场景分类  
- 父子组件通信: 
  - props
  - $parent / $children
  - provide / inject
  - $refs
  - $attrs / $listeners  
- 兄弟组件通信: 
  - eventBus
  - vuex  
  - 通过共同的祖先节点间接通信
- 跨级通信:  
  - eventBus
  - Vuex
  - provide / inject
  - $attrs / $listeners

---

### props / $emit
父组件通过 props 传递数据给子组件，子组件通过 emit 发送事件传递数据给父组件，这两种方式是最常用的父子通信实现办法。

### $children / $parent
子实例可以用 this.$parent 访问父实例，子实例被推入父实例的 $children 数组中。

### provide/ inject
这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。
> provide 和 inject 主要在开发高阶插件/组件库时使用。并不推荐用于普通应用程序代码中。

### $refs
可以访问注册过的 ref attribute 所有 DOM 元素和组件实例。父组件中可以通过 ref 访问子组件。

### eventBus
所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件， 所以组件都可以通知其他组件。
```javascript
// 创建事件总线并导出
import Vue from 'vue'
export const EventBus = new Vue()

// 在需要通讯的组件中引入 EventBus 并通过 $emit、$on 方法发送接收事件
EventBus.$emit
EventBus.$on
```

### Vuex
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
Vuex 解决了多个视图依赖于同一状态和来自不同视图的行为需要变更同一状态的问题，**将开发者的精力聚焦于数据的更新而不是数据在组件之间的传递上**。

### $attrs 与 $listeners
vm.$attrs 包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。

包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。