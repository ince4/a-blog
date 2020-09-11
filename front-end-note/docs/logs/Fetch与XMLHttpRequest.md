# Fetch 与 XMLHttpRequest
Fetch API 是 XMLHttpRequest的现代替代方案，基于Promise设计，可以直接链式调用或使用 async/await。且提供了 Request 和 Response 对象的通用定义。

```javascript
// XHR
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && (xhr.status >=200 && xhr.status < 300 || xhr.status === 300)) {
        console.log(xhr.responseText)   // 从服务器获取数据
    }
}
xhr.send()

// Fetch
fetch(url, { method: 'GET' })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
```

Fetch Api 相较原生 XMLHttpRequest 使用更方便、简洁，但比起后者还不够成熟，尚不能完全替代 XMLHttpRequest，其原因表现在以下几点。


- 当接收到一个代表错误的 HTTP 状态码时，从 fetch() 返回的 Promise 不会被标记为 reject， 即使响应的 HTTP 状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 ok 属性设置为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject。
> 该特性会使错误捕获的复杂程度上升。只有仅当请求无法完成时才触发（如网络故障或请求被阻止），对于 HTTP 错误需要在 promise resolved 情况下判断 respone.ok 的值
- fetch() 不会发送 cookies。除非你使用了credentials 的初始化选项。（自 2017 年 8 月 25 日以后，默认的 credentials 政策变更为 same-origin。Firefox 也在 61.0b13 版本中进行了修改）
- fetch 不包含类似 XHR 对象中的 timeout 属性和 ontimeout 事件，对于超时控制需要手动封装实现。
- XHR 对象中 abort() 与 onabort 可以实现结束请求与监听时间解决。对于 Fetch， 浏览器已经开始为 AbortController 和 AbortSignal 接口（也就是Abort API）添加实验性支持，允许像 Fetch 和 XHR 这样的操作在还未完成时被中止
- Fetch 不支持 ProgressEvent，无法获得文件上传、表单提交的进度。

Fetch 目前还不够成熟，但日常使用中除非应用有特殊需求，也是完全可以使用的。而对于规模和复杂度达到一定程度的项目来说还是应该使用 axios 等经过封装过的成熟 Ajax 库。

---
深入学习：

[使用 Fetch-MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)  
[【译】XMLHttpRequest和Fetch, 谁最适合AJAX？](https://www.cnblogs.com/hanksyao/p/12089105.html#h3-2)  