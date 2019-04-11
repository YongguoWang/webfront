/**
 * Created by newuser on 2019/4/4.
 */
// 1.0 同源策略
// XMLHttpRequest()
//2.0 非同源策略
// 跨域 jsonp
// 参数列表
// 请求数据的地址
//请求数据的方式
//请求数据的参数
//是否异步
//请求成功的回调函数
//请求失败的回调函数
// dataType   判断是否要跨域一个标识（字段）

var  $ = {
    ajax:function(options){
            var url = options.url;
            var type = options.type ;
            var data = options.data;
            var async = options.async;
            // var success = options.success()
            // var success = options.error()
            var dataType = options.dataType ;// 1.0 t同源策略下  响应数据格式 json / xml / text/html ; 2.0 非同源策略，判断是否要跨域的字段
            // 处理一下前端提交的参数
            var dataStr = "";  // page=0 & pagesiz=2
            for(var k in data ){
                dataStr+= k + "="+data[k] + "&"
            }

            dataStr = dataStr.slice(0,-1);
            // console.log(dataStr);

            if(dataType !="jsonp"){
                //ajax 编程 XMLHttpRequest() 该对象不支持跨域
                // console.log("不跨域！")
                var xhr = new XMLHttpRequest();
                xhr.open(type,type === "get"? url+"?"+ dataStr : url,async);
                if(type === "post"){
                    //设置请求头
                    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                }
                xhr.send(type==="get"?null:dataStr);
                xhr.onreadystatechange = function(){
                    if(xhr.readyState ==  4 ){
                            if(xhr.status == 200 ){
                                //响应的报文（数据）
                                var res = xhr.responseText;
                                // 响应的报文（数据）传给回调函数
                                //请求成功的执行的回调函数
                                if(options.success){
                                    options.success(res);
                                }
                            }else {
                                //请求失败执行的回调函数
                                if(options.error){
                                    var res = xhr.responseText;
                                    options.error(res);
                                }
                            }
                    }
                }
            }else {
                console.log("跨域")
                // 动态创建scipt标签 逻辑....
                var el = document.createElement("script");
                el.src=url+"?"+dataStr
                // 往head标签添加script
                var head = document.getElementsByTagName("script")[0];
                head.appendChild(el);
                window[options.success] = function(data){
                    console.log(data)
                    if(options.success){
                        options.success(data)
                    }
                }
            }

    }
}



