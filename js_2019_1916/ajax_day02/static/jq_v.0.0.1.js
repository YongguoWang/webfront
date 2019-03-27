//  阿贾克斯  ajax

// 1.0 请求地址
// 2.0 请求方式
// 3.0 是否异步
// 4.0 提交的参数
// 5.0 请求成功的回调函数
// 6.0 请求失败的回调函数

function ajax(options){
        var url = options.url;// 接收请求地址
        var type = options.type || 'get'; // 接收 请求方式  || 
        // var async = options.async || false;  // 接收 是否异步的值
        var async = options.async==true?true : false;
        var data =  options.data || {};         // 接收提交的参数  page=1&pageSize=10
        // console.log(type)
        // if(options.success){
        //     options.success(res);
        // }
        // 定义字符串 记录传参
        var dataStr = "";
        // 循环
        for(var k in data ){
            dataStr += k+"="+data[k]+"&";
        }
        // console.log(dataStr)
        // 切割字符串的方法有多种 。 slice  substr
        dataStr = dataStr.slice(0,-1);
        // console.log(dataStr)
        // dataStr =  dataStr.substr(); // 1. 开始索引值  2. 切割多少个
        // console.log(dataStr)

        // ajax 编程
        var xhr = null;
        if(XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }else {
            // 兼容原始时代的IE
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }
        // 实例过后,调用open()
        // 三目运算  条件 ？ 结果1：结果2
        // 发起请求
        xhr.open(type,type=='get'? url+"?"+dataStr : url,async);// 1. 请求的方式  2. 请求的地址 3. 是否异步。

        
        // 发送请求
        xhr.send(type=='get'?null:dataStr);
        // 监听请求响应
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                    if(xhr.status == 200){
                            // 接收返回的内容
                            var res = xhr.responseText;
                            if(options.success){
                                options.success(res);
                            }
                    }else {
                          // 接收返回的内容
                          var res = xhr.responseText;
                          if(options.error){
                              options.error(res);
                          }
                    }
            }
        }


}

