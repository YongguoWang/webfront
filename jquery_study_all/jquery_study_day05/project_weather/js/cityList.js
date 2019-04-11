(function($){
    // 获取所有的城市
    function getCityList(){
            $.ajax({
                url:"http://127.0.0.1/jquery_study_day05/project_weather/server/data.php",
                type:"get",
                success:function(data){
                    console.log(data)

                    var province = [];
                    var obj = {};
                    for(var i = 0 ; i < data.length;i++){
                                province.push(data[i].province);
                    }

                    var newProvince = [];
                    for(var j = 0 ; j <province.length;j++ ){
                        if(obj[province[j]] == undefined){
                            obj[province[j]] = 1;
                            newProvince.push(province[j]);
                        }
                    }

                    console.log(newProvince)
                    // renderFun(data)
                    renderFun(data,newProvince)
                },
                error:function(){
                    console.log("err")
                }
            })
    }
    // 渲染
    function renderFun(data,newProvince){
        // var str  =  template("templateId",{result:data});
        // $(".yg_cityList_items").html(str);
            var strHtml = "";
            for(var i = 0 ; i < newProvince.length;i++){  // 循环省份
                    strHtml+="<li>"+newProvince[i]+"</li>"//拼接省份
                    for(var j = 0 ; j < data.length;j++){ //循环城市
                    if(newProvince[i] ==data[j].province ){//和省份匹配
                        strHtml+=' <li><a href="detail.html?cname='+data[j].city+'">'+data[j].city+'</a></li>'//拼接城市
                    }
                }

                console.log(strHtml)
            }

            $(".yg_cityList_items").html(strHtml);
    }

    getCityList();


})(jQuery)