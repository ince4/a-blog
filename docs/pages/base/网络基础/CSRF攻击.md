# CSRF攻击
CSRF 英文全称是 Cross-site request forgery，即“跨站请求伪造”。指的是用户点击链接打开攻击者的网站，攻击者利用用户目前的登录状态发起跨站请求。CSRF攻击可以以受害者名义发送请求。如发送邮件，盗取账号，购买商品，货币转账，修改受害者的网络配置等等。

> **跨站请求**  
> Cookie 中若有效顶级域名 + 二级域名相同则判断为同站，如 www.a.taobao.com 与 www.b.taobao.com 为同站


## 1、常见攻击方式

- 通过 img 标签的 src 属性自动发起 GET 请求
- 通过脚本自动提交一个表单
- 诱导用户点击链接发起 GET 请求

## 2、防范

### 利用Cookie的SameSite属性

SameSite 属性可以选择以下三个值之一
- Strict：浏览器完全禁止第三方请求携带Cookie
- Lax：在 GET 方法提交表单或者 a 标签发送 GET 请求的情况下可以携带 Cookie
- None：默认模式，请求会自动携带上 Cookie

### 验证来源站点
根据请求头中的 Origin 和 Referer 字段判断来源站点。
但 Origin 和 Referer 值可以被修改，可靠性不高。

### CSRF Token
浏览器向服务器发送请求时，服务器生成一个字符串并将其植入到返回的页面中（放在head区域或者表单里面）。  
浏览器向服务端发送请求时必须带上这个字符串，然后服务器来验证是否合法。
token进行了加密（有日期等参数，其他人无法知道具体参数）

> 对于 GET 请求可以将 token 值作为请求的 url 参数  
> 对于 POST 请求可以使用 &lt;input type="hidden" name="csrftoken" value="tokenvalue"&gt;