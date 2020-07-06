# this关键字
this 关键字表示对当前对象的引用，函数的调用方式决定了 this 的值。

## 1、this指向
this指向它的直接调用者

- 直接调用函数，this 指向 window (严格模式则为undefined)
- 作为对象属性调用函数，this 指向该对象
- 箭头函数没有 this，在箭头函数内调用 this 指向外层 this 的值
- 构造函数中的 this 与被创建的新对象绑定

``` javascript
const obj = {
    i: 10,
    b: () => console.log(this.i, this),
    c: function() {
        console.log(this.i, this)
    }
}
obj.b() // undefined, Window{...}
obj.c() // 10, Object {...}
```
## 2、改变this指向
Function.prototype 上的 call、apply 和 bind 方法可以使用指定的 this 值作为参数传入，和单独给出的一个或多个参数来调用函数，其中 call 和 apply 方法调用后会自动执行函数，bind 方法会返回一个新函数。

#### call方法
function.call(thisArg, arg1, arg2, ...)
``` javascript
Function.prototype.myCall = function (target, ...args) {
    target = target ? new Object (target) : window
    const fn = Symbol()
    target[fn] = this
    let result = target[fn](...args)
    delete target[fn]
    return result
}
```

#### apply方法
func.apply(thisArg, [argsArray])
``` javascript
Function.prototype.myApply = function (target, arg) {
    target = target ? new Object (target) : window
    const fn = Symbol()
    target[fn] = this
    let result
    if (!arg) {
        result = target.fn()
    } else {
        result = target.fn(...arg)
    }
    delete target.fn
    return result
}
``` 

#### bind方法
function.bind(thisArg[, arg1[, arg2[, ...]]])
``` javascript
Function.prototype.myBind = function(context, ...args) {
	const fn = this
	const bindFn = function (...newFnArgs) {
	    return fn.call(
			// 当返回的绑定函数作为构造函数被new调用，绑定的上下文指向实例对象
	        this instanceof bindFn ? this : context,
	        ...args, ...newFnArgs
	    )
	}
	bindFn.prototype = Object.create(fn.prototype)
	return bindFn
}
```