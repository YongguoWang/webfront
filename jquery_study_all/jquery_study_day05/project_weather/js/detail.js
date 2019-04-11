(function($){

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
                var o1  = data.results[0].weather_data; //今天的天气信息
                var o2 =  data.results[0].index;
                // console.log(cn)
                console.log(o2)
                // 数据处理
                for(var  i = 0 ; i < o1.length;i++){
                    o1[i].aaa = o2[i].des;
                }
                console.log(o1)
                // 渲染数据的方法
                renderFun(o1)

                // 设置当前的城市
                $(".yg_detail .yg_detail_city span").html(cn);

            },
            error:function(){
                console.log("err")
            }
        }) 
    }
    // 渲染数据的方法
    function renderFun(obj){
        // 调用模板函数
        var htmlStr = template("templateId",{data:obj});
        //渲染页面
        $(".yg_detail_list_items").html(htmlStr);

    }

    // 调用获取城市数据的方法
    // 获取搜索页传递过来的参数
    var url = window.location.href ;
    var city_name = "";
    if(url.indexOf("?") >-1){
        // 切割字符串
        city_name = url.split("?")[1].split("=")[1];
    }
    console.log(decodeURIComponent(city_name))
    // 注意乱码
    var str = decodeURIComponent(city_name);
    getCityList(str);

})(jQuery)