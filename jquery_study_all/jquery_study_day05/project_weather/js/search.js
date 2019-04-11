(function($){  //自执行函数
    // 1.封装查询天气的方法
    function getCityList(cname){
            $.ajax({
                url:"http://api.map.baidu.com/telematics/v3/weather",
                data:{
                    output:"json",
                    ak:"rOxVAiTE768wol49rGdOoelc11EojPvE",
                    location:cname
                },
                dataType:"jsonp",
                success:function(data){
                    console.log(data)
                    if(data.error !=0){
                            alert("查不到这个城市的天气！");
                            return ;
                    }
                    // 3.把数据渲染在页面的方法
                    var cn = data.results[0].currentCity; //当前的城市
                    var o = data.results[0].weather_data[0]; //今天的天气信息
                    // console.log(cn)
                    // console.log(o)
                    renderFun(cn , o); //调用渲染页面的方法
                    //显示连接    
                    $(".yg_search_more").show();
                     // 4.0 设置跳转的地址
                    $(".yg_search .yg_search_more .more_btn a").attr("href","detail.html?cname="+cn);
                },
                error:function(){
                    console.log("err")
                }
            })
    }
    // 2.封装把数据渲染在页面的方法
    function renderFun(cname,obj){ //形参
            var str = "";
            var result ;
            if(cname){
                str = cname;
            }
            if(obj){
                result = obj;
            }
            // 调用模板函数
           var  htmlStr =  template("templateId",{str:str,result:result}); // 参数1.模板id   、参数2.数据 {}
            $(".yg_search_result").html(htmlStr); //渲染页面
            // console.log(htmlStr)
    }
    // $(function(){
    //     getCityList("广州")
    // })

    $(".search_btn").click(function(){ //事件的绑定
        var inpVal = $(".search_inp").val();//输入框的值
        if(inpVal.length == 0){//判断输入框是否有值
                return ;//没有终止代码
        }
        // 调用查询天气的方法
        getCityList(inpVal)
    })
})(jQuery)