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
##### ajax

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










