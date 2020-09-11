# CSS-BEM命名规范
BEM 属于 CSS 方法论，是为了提高 CSS 的可维护性和拓展性衍生的一种 CSS 样式名的原则和概念以及命名规范，便于统一团队开发规范和维护。

## 核心概念
### Block(块)
逻辑和功能独立的模块,具有语义或视觉上的唯一地意义。  
在大多数情况下，任何独立的页面元素（或复杂或简单）都可以被视作一个块。它的HTML容器会有一个唯一的CSS类名，也就是这个块的名字。

```html
<ul class="list">
</ul>

<style>
	.list {}
</style>
```

### Element(元素)
Block 中的后代元素，一个块中元素的类名必须用祖先级块的名称作为前缀。
```html
<ul class="list">
	<li class="list__item"></li>
</ul>

<style>
	.list__item {}
</style>
```

### Modifier(修饰符)
一个“修饰符”可以理解为一个块的特定状态，如 disabled、focus 等，也可根据尺寸或其他状态分为 small、large 等状态。
```html
<ul class="list">
	<li class="list__item"></li>
	<li class="list__item--large"></li>
	<button class="list__btn--disabled"></button>
</ul>


<style>
	.list__item--large {}
	.list__btn--disabled {}
</style>
```

## 使用例
```vue
<!-- app.vue -->
<aside class="aside">
  <!-- 显示/隐藏侧边栏 -->
  <img :class="['aside__toggle--show', {'aside__toggle--hide': isHide}]" />
  <ul class="aside__menu">
    <li class="aside__menu__item">首页</li>
  </ul>
</aside>

<style>
.aside {}
.aside__toggle--show {}
.aside__toggle--hide {}
.aside__menu {}
.aside__menu__item {}
</style>

<style lang='scss'>
.aside {
  &__toggle {
    &--show {}
    &--hide {}
  }
  &__menu {
    &__item {}
  }
}
</style>
```

---

深入学习：

[getbem.com/](http://getbem.com/)  
[CSS BEM 书写规范](https://github.com/Tencent/tmt-workflow/wiki/%E2%92%9B-%5B%E8%A7%84%E8%8C%83%5D--CSS-BEM-%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83)  
[掘金【CSS系列】命名千万条，BEM第一条](https://juejin.im/post/6844903831063494669#heading-3)