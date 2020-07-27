# Vue3.0新特性
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