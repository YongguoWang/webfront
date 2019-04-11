### 今天内容
1. postion()

2. offset()

3. width()

4. height()

5. scroll()

6. scrollTop()

- 绑定事件的方法

7. bind()

8. on()

9. delegate()

- 解绑事件的方法

10. unbind()

11. off()

12. undelegate()

- jquery的插件的使用

1. 第三方插件

2. 自定义的插件


- ajax   (jqeury  ajax 封装的比较完善！！)

-----------------------------------------------------------------------------------------------------------------------
##### js  ajax

- 快速创建动态网页的技术！

- XMLHttpRequest   方法对象

-  var  xhr  =  new  XMLHttpRequest()   创建实例

- xhr.open() // 参数 1. 请求服务端数据方式  2.请求数据的地址 3. 布尔值  true

- xhr.send() // get 参数：null   , post  参数：提交的数据

- xhr.onreadystatechange = function(){   // 监听请求和响应的状态

    if(xhr.readyState === 4 ){ // 请求完成
            if(xhr.status ===  200 ){  // 响应成功
                        xhr.responseText ; // 响应报文
                        // json  xml 
            }
    }
}

-----------------------------------------------------------------------------------------------------------------------
jquery ajax

- 是在开启服务( http:// 协议)下进行数据通信的

- 怎么搭建服务环境
1. webstorm , Hbuilder 编辑器自带http服务.(注意，但是不能直接执行后端编程如，java,php)

2. 安装wamp服务器软件 ，apache 能够执行php程序。

3. 安装nodejs软件 ，win + R   , 通过npm install http-server   -g  ， 可搭建本地服务。

。。。。。


ajax 

参数：

url  请求数据的地址（接口）

type  请求数据的方式 （post / get ）

data   请求数据 提交的参数

async  判断是否异步

success:function(){}   请求成功执行的回调函数
 
error:function(){}   请求失败执行的回调函数


------  跨域  （如何解决不是同源策略的数据）

ajax 在同源策略下
dataType 
数据的格式
json xml 


ajax 不是在同源策略下
dataType ： jsonp
判断是否跨域的一个标识



跨域请求：
原生js的解决方法
通过 script 标签的 src  属性获取非同源策略下的数据。

<!--  js   -->
ajax : 不支持非同源策略下数据的传输。
XMLHttpRequest() 这个对象

<!-- jquery  -->

jsonp  : 通过动态创建script标签，利用src属性获取非同源策略下的文档内容（javacript代码）

$.ajax()





jsonp 只是一种解决跨域数据的方法


#### 第三方接口
- 新浪股票接口
https://www.cnblogs.com/wumac/p/6650688.html



- 天气查询

https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=wise_web&sugsid=1457,21125,28775,28724,28557,28585,28604,28627,28605&wd=aaa&req=2&csor=3&pwd=aa&cb=jQuery110204238026639926116_1554369540313&_=1554369540319







