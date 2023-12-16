# Promise 简易实现

> - 一个 promise 实例的当前状态只能是 pending、fulfilled 和 rejected 三种之一。状态改变只能是 pending 到 fulfilled 或者 pending 到 rejected。状态改变不可逆。
> - promise 的 then 方法接收两个可选参数，表示 promise 状态改变时的回调 promise.then(onFulfilled, onRejected)。then 方法返回一个 promise，then 方法可被同一个 promise 调用多次。

```javascript
class MyPromise {
    state = 'pending'
    value = undefined
    reason = undefined

    resolveCallbacks = []
    rejectCallbacks = []

    constructor(fn) {
        const resolveHandler = (value) => {
                if (this.state === 'pending') {
                    this.state = 'fulfilled'
                    this.value = value
                    this.resolveCallbacks.forEach(fn => fn(value))
                }
        }

        const rejectHandler = (reason) => {
                if (this.state === 'pending') {
                    this.state = 'rejected'
                    this.reason = reason
                    this.rejectCallbacks.forEach(fn => fn(reason))
                }
        }

        try {
            fn(resolveHandler, rejectHandler)
        } catch (err) {
            rejectHandler(err)
        }
    }

    then(fn1, fn2) {
        fn1 = typeof fn1 === 'function' ? fn1 : (v) => v
        fn2 = typeof fn2 === 'function' ? fn2 : (e) => e

        if (this.state === 'pending') {
            const p1 = new MyPromise((resolve, reject) => {
                this.resolveCallbacks.push(() => {
                    try {
                        const newValue = fn1(this.value)
                        resolve(newValue)
                    } catch (err) {
                        reject(err)
                    }
                })

                this.rejectCallbacks.push(() => {
                    try {
                        const newReason = fn2(this.reason)
                        resolve(newReason)
                    } catch (err) {
                        reject(err)
                    }
                })
            })
            return p1
        }

        if (this.state === 'fulfilled') {
            const p1 = new MyPromise((resolve, reject) => {
                try {
                    const newValue = fn1(this.value)
                    resolve(newValue)
                } catch (err) {
                    reject(err)
                }
            })
            return p1
        }

        if (this.state === 'rejected') {
            const p1 = new MyPromise((resolve, reject) => {
                try {
                    const newReason = fn2(this.reason)
                    resolve(newReason)
                } catch (err) {
                    reject(err)
                }
            })
            return p1
        }
    }

    catch(fn) {
        return this.then(null, fn)
    }
}

MyPromise.resolve = function (value) {
    return new MyPromise((resolve, reject) => resolve(value))
}
MyPromise.reject = function (reason) {
    return new MyPromise((resolve, reject) => reject(reason))
}

MyPromise.all = function (promiseList = []) {
    const p1 = new MyPromise((resolve, reject) => {
        const result = []
        const length = promiseList.length
        let resolvedCount = 0

        promiseList.forEach(p => {
            p.then(data => {
                result.push(data)

                // resolvedCount 必须在 then 里面做 ++
                // 不能用 index
                resolvedCount++
                if (resolvedCount === length) {
                    // 已经遍历到了最后一个 promise
                    resolve(result)
                }
            }).catch(err => {
                reject(err)
            })
        })
    })
    return p1
}

MyPromise.race = function (promiseList = []) {
    let resolved = false
    const p1 = new Promise((resolve, reject) => {
        promiseList.forEach(p => {
            p.then(data => {
                if (!resolved) {
                    resolve(data)
                    resolved = true
                }
            }).catch((err) => {
                reject(err)
            })
        })
    })
    return p1
}

Promise.prototype.finally = function(callback) {
    return this.then(data => {
            return Promise.resolve(callback()).then(() => data);
        }, err => {
            return Promise.resolve(callback()).then(() => {throw err});
    });
}
```
