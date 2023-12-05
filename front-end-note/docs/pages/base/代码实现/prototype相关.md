# 对象相关

## new 操作符

```javascript
const createNew = (Con, ...args) => {
  const obj = {};
  Object.setPrototypeOf(obj, Con.prototype);
  let result = Con.apply(obj, args);
  return result instanceof Object ? result : obj;
};
```

## Object.create

```javascript
function _create(prototypeOfCon) {
  function foo() {}
  foo.prototype = prototypeOfCon;
  return new foo();
}

function a() {
  this.s = "1";
}
let b = createNew(a);
let c = _create(a.prototype);
```

## instanceof

```javascript
const myInstanceOf = (left, right) => {
  let leftValue = left.__proto__;
  let rightValue = right.prototype;
  while (true) {
    if (leftValue === null) return false;
    if (leftValue === rightValue) return true;
    leftValue = leftValue.__proto__;
  }
};
```

## call、apply、bind

```javascript
// call
Function.prototype.$call = function (target, ...args) {
  target = target ? new Object(target) : window;
  const fn = Symbol();
  target[fn] = this;
  let result = target[fn](...args);
  delete target[fn];
  return result;
};

// apply
Function.prototype.$apply = function (target, arg) {
  target = target ? new Object(target) : window;
  const fn = Symbol();
  target[fn] = this;
  let result;
  if (!arg) {
    result = target.fn();
  } else {
    result = target.fn(...arg);
  }
  delete target.fn;
  return result;
};

// bind
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
let str = "abc";
var r = Array.prototype.slice.$apply(str);
console.log(r);
```
