#### 遇到的问题？
1. 听不懂 （a. 数据格式,xml/json   ）
2. 在看代码 （a. 回调函数）
3. 听不懂（a. ajax有什么作用，缺少理解 ）

#### 解决的方案

- ajax 是一门快速创建动态网页的技术（前后端数据交互)
- ajax 编程
```
步骤：
1.0  javascript 内置的对象  XMLHttpRequest();
2.0  实例化  var xhr = new  XMLHttpRequest();
3.0 发起请求   xhr.open(); // 参数 ：a. 请求数据的格式 'get'/'post'  b.请求数据的地址 c.是否异步（true）
4.0 发送请求主体 xhr.send( )  // 参数 ：get === null ; post === 前端提交的参数 例如： page=1&pageSize=10
5.0 监听请求的状态和响应的状态  xhr.onreadystatechange = function(){}
6.0 判断请求的状态  xhr.readyState == 4
7.0 判断响应的状态 xhr.status == 200
8.0 响应报文  xhr.responseText;
9.0 判断后端响应回来的数据格式（json / xml / text ） xhr.getResponseHeader('Content-Type'); // 获取头部信息

```
