var $ = {};
$.ajax = function(options){
    // XMLHttpRequest()
    if(options.dataType =="jsonp"){
        //new Date().getTime()获取的是时间戳 从1970.1.1到此刻的毫秒值
        //Math.random()  0.123123123
        var cbName = "jQuery"+(new Date().getTime())+"_"+(Math.random()+"").substring(3);
        // console.log(cbName)
        if(options.jsonp == undefined){
                options.jsonp = "callback";
        }
        if(options.jsonpCallback == undefined){
            options.jsonpCallback = cbName;
        }
        //动态创建script标签
        var script = document.createElement("script");
        script.src=options.url+"?"+options.jsonp+"="+options.jsonpCallback;
        document.getElementsByTagName("head")[0].appendChild(script);
        // 回调函数
        // function 
        window[options.jsonpCallback] = function(data){
                if( options.success){
                    options.success(data);
                }
        }
    }
}