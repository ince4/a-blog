# Promise简易实现

> **promise/A+规范内容**
>- 一个 promise 实例的当前状态只能是 pending、fulfilled 和 rejected 三种之一。状态改变只能是 pending 到fulfilled或者 pending 到 rejected。状态改变不可逆。  
>- promise 的 then 方法接收两个可选参数，表示 promise 状态改变时的回调 promise.then(onFulfilled, onRejected)。then 方法返回一个 promise，then 方法可被同一个 promise 调用多次。

## 1、Promise的状态
```javascript
const PENDING = 'pending'
const RESOLVED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
	constructor(excutor) {
		this.state = PENDING
		this.value = undefined

		// 保存回调函数
		this.resolvedCallbacks = []
		this.rejectedCallbacks = []
		
		const resolve = value => {
			// setTimeout 确保回调函数执行时机
			if (this.state === PENDING) {
				this.state = RESOLVED
				this.value = value
				this.resolvedCallbacks.map(cb => cb(this.value))
			}
		}
		
		const reject = value => {
			if (this.state === PENDING) {
				this.state = REJECTED
				this.value = value
				this.rejectedCallbacks.map(cb => cb(this.value))
			}
		}

		// Promise实例生成时执行传入的函数
		try {
			// resolve 和 reject 的执行实机由excutor决定
			excutor(resolve, reject)
		} catch (e) {
			reject(e)
		}
	}
}
```

## 2、then
then 方法指定 Promise 状态改变的回调函数。

```javascript
class MyPromise {
	constructor(excutor) {
		// ...
	}
	// then 方法存在于 Promise.prototype
	then(onFulfilled, onRejected) {

		// 若状态为等待态，就往回调函数中 push 函数
		if (this.state === PENDING) {
			typeof onFulfilled === 'function' && this.resolvedCallbacks.push(onFulfilled)
			typeof onRejected === 'function' && this.rejectedCallbacks.push(onRejected)
		}

		// 若状态非等待态，将实例的 value 值作为参数执行函数
		if (this.state === RESOLVED) {
			typeof onFulfilled === 'function' && onFulfilled(this.value)
		}
		if (this.state === REJECTED) {
			typeof onRejected === 'function' && onRejected(this.value)
		}

		return this
	}
}
```

