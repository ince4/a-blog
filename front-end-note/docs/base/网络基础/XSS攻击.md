# XSS攻击
XSS 全称是 Cross Site Scripting(跨站脚本)。XSS 攻击是指浏览器中执行恶意脚本从而拿到用户的信息并进行操作。

## 1、危害

xss 主要有以下几种危害
- 窃取Cookie。
- 监听用户行为，比如输入账号密码后直接发送到黑客服务器。
- 修改 DOM 伪造登录表单。
- 在页面中生成浮窗广告。
- ...

## 2、类型

- 反射型：恶意脚本作为网络请求的一部分，如
```javascript
http://xxx.com?q=<script>alert("xss")</script>
```
- DOM型：利用页面上依赖请求参数或输入值的动态元素
- 存储型：恶意 JavaScript 脚本被保存在服务端数据库中

## 3、区别
反射型的 XSS 的恶意脚本存在 URL 里，存储型 XSS 的恶意代码存在数据库里。  
而基于 DOM 型的 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，其他两种 XSS 都属于服务端的安全漏洞。

## 4、防范
- 在前端和服务端对用户的输入进行转码或者白名单过滤
- 设置 Cookie 的 HttpOnly 属性，禁止 JavaScript 读取 Cookie 值
