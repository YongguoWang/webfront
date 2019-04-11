### 回顾昨天的内容
1.0 jquery 
- 下载并引入html文件当中

-  jquery 的使用

- a. 调用者 b.参数 c.返回值 d.功能

- 入口函数

- $ 是一个函数

- $(selector).css()

- $(selector).html()

- $(selector).text()

 - $(selector).val()

- 选择器（id class 标签名）
- 伪类选择器
- 属性选择器
```
$(selector).eq()// 获取元素集合里指定的元素
$(selector).find()//查找子元素
$(selector).children()
$(selector).parent()
$(selector).siblings()
$(selector).prev() // 获取当前元素的上一个元素
$(selector).next() // 获取当前元素的下一个元素

```
- jquery 的dom操作
```
var strhtml = "<div></div>";
$(selector).append(strhtml)
$(selector).preappend(strhtml)
$(selector).appendTo()

$(selector).remove($dom)
$(selector).empty()

```
- jquery 的类名的操作
```
$(selector).addClass()
$(selector).removeClass()
$(selector).hasClass()
$(selector).toggleClass()

```
- jquery 的标签属性的操作
```
$(selector).attr('src','./images/1.jpg')
$(selector).prop('checked' , false )
```
- jquery的动画方法
```
$(selector).hide()
$(selector).show()

$(selector).fadeIn()
$(selector).fadeOut()

$(selector).slideDown()
$(selector).slideUp()

$(selector).animate({},1000)
$(selector).animate({},1000,function(){})

$(selector).stop()

```
- jquery 创建动态网页的api

```
$.ajax()

额外：https://www.cnblogs.com/nolaaaaa/p/9126385.html

a. XMLHttpRequest()

b. jsonp 


=======================================
1.数据接口（后端的程序员负责）

a. 同源策略（协议 ，域名 ，端口，三者一致）http://127.0.0.1:80/ 

XMLHttpRequest() 方法对象 仅支持 同源策略

b. 非同源策略（协议 ，域名 ，端口，三者不一致） http://192.168.31.12:8080
jsonp 这是一个解决跨域数据的方案。



2. 服务器和服务器软件和服务

a.服务器（电脑主机）
b.服务器软件 
apache   ------ > php
tomcat -------> java
nodejs ----- > js
IIS --------> .net
c.服务（提供一个数据传输的环境）


3.已经和后端程序员协商了（数据）
a.同源策略下
$.ajax({
    url:"http:127.0.0.1:80/login.php",
    type:"post",
    data:{
        uname:"",
        upwd:""
    },
    dataType:"",// json , xml , text, html, javacript
    success:function(data){

    },
    error:function(){}
})

b.跨域
$.ajax({
    url:"",
    type:"",
    dataType:"jsonp",
    jsonp:"",
    jsonpCallback:"",
    success:function(data){

    },
    error:function(){}
})





```
- 天气查询
http://lbsyun.baidu.com/index.php?title=car/api/weather

第三方的接口
http://api.map.baidu.com/telematics/v3/weather?location=北京&output=json&ak=E4805d16520de693a3fe707cdc962045

参数：(必须填写)

output:"json"

ak:"rOxVAiTE768wol49rGdOoelc11EojPvE"

location:"广州"

秘钥（key）
rOxVAiTE768wol49rGdOoelc11EojPvE








