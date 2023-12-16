# BFC

## 概念
BFC（Block Formatting Context），即块级格式化上下文，它是页面中的一块渲染区域，并且有一套属于自己的渲染规则：让内部的子元素不会影响到外部的元素

## 触发条件
>- 根元素
>- 浮动元素
>- overflow值不为visible，为auto、scroll、hidden
>- display值为inline-block、flex、inline-flex、table
>- position的值为absolute或fixed

## 特性
>- 对于同一个BFC的俩个相邻的盒子的margin会发生重叠，与方向无关。
>- 计算BFC的高度时，浮动子元素也参与计算
>- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然
>- BFC的区域不会与float的元素区域重叠
>- 内部的盒子会在垂直方向上一个接一个的放置
>- 每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此


## 应用场景
### 防止margin重叠
在元素外包裹一个bfc容器 防止相邻两个元素的margin重叠

### 清除浮动
计算BFC的高度时，浮动子元素也参与计算
BFC的区域不会与float的元素区域重叠