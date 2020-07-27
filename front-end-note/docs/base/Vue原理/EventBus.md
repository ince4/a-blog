# EventBus
Vue 中 Event Bus 作为全局总线，可以被看作为发布订阅模式中的事件中心

创建 Event Bus 并导出
```javascript
import Vue from 'vue'
export const EventBus = new Vue()
```

引入 Event Bus 并挂载
```javascript
import bus from 'EventBus'
Vue.prototype.bus = bus
```

发布/订阅事件
```javascript
this.bus.$emit('event1', params)
this.bus.$on('event1', callback)
```

---

### 基本实现
```javascript
class EventEmitter {
	constructor() {
		this.handlers = {} // 存储事件名与回调函数的对应关系
	}


	// 事件订阅
	on(eventName, cb) {
		if (!this.handlers[eventName]) {
			this.handlers[eventName] = []
		}

		// 事件对应的回调
		this.handlers[eventName].push(cb)
	}

	// 事件发布
	emit(eventName, ...args) {
		if (this.handlers[eventName]) {
			this.handlers[eventName].forEach((callback) => {
				callback(...args)
			})
		}
		

	// 移除某个事件回调队列里的指定回调函数
	off(eventName, cb) {
		const callbacks = this.handlers[eventName]
		const index = callbacks.indexOf(cb)
		if (index !== -1) {
		  callbacks.splice(index, 1)
		}
	}

	// 为事件注册单次监听器
	once(eventName, cb) {
		// 对回调函数进行包装，使其执行完毕自动被移除
		const wrapper = (...args) => {
			cb.apply(...args)
			this.off(eventName, wrapper)
		}
		this.on(eventName, wrapper)
	}
}
```