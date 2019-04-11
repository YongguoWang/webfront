(function($){   // 自执行函数 ： 立即执行的意思
    // if(typeof $ != 'function'){
    //     return ;
    // }
    if($ && typeof $ === 'function'){// 判断 1. $ 有没有值传进来 2. 判断 $是不是一个function  
            // console.log("test ...")
            // 需求 ： 
            // 1.0 类名 container 的div标签 
            // 2.0 自定义轮播图的样式   width height maginLeft
            // 3.0 实现轮播图的自动切换

            $.fn.banner = function(option){
                    // console.log(option)
                    // var container = $(this);
                    // 1.0 设置大盒子的宽高
                    $(this).css({
                        width:option.width,
                        height:option.height,
                        backgroundColor:option.bgcolor,
                        overflow:"hidden"
                    })
                    // 2.0 创建banner盒子下的ul > li *5
                    var strHtml = "<ul>";
                    for(var i = 0 ; i < option.count  ; i++ ){
                        strHtml+="<li>"+i+"</li>"
                    }
                    strHtml+="</ul>"
                    console.log(strHtml)
                    // 3.0 把拼接好的字符串 添加到 container盒子上
                    $(this).html(strHtml)

                    // 4.0 设置ul的样式
                    $(this).find("ul").css({
                        margin:0,
                        padding:0,
                        listStyle:"none",
                        width:"1000%"
                    })
                    // 5.0 设置里的样式
                    $(this).find("ul li").css({
                        width:"10%",
                        height:option.height,
                        float:"left"
                    })
                    console.log(option.arrColor)
                    // 6.0 给每一个li填充背景色
                    for(var j = 0 ; j < option.arrColor.length; j++){
                        // 转 js 元素对象
                        // $(this).find("ul li")[j].style.backgroundColor =  option.arrColor[j];
                        console.log(option.arrColor[j])
                        $(this).find("li").eq(j).css("backgroundColor",  option.arrColor[j])
                    }
                    // 索引值
                    var index = 0;
                    // 宽度
                    var  width = parseInt(option.width);
                    // 定时器
                    var timer = setInterval(changeImage , 1500);
                    // 记录 $(this).find("ul") 
                    var _ul = $(this).find("ul");
                    // 切换li标签
                    function changeImage(){// 作用域 this 的指向的问题 ！
                        // debugger
                        // console.log("test !!!!!!!")
                        index ++;
                        if(index > option.count -1 ){
                                    index = 0;
                        }
                        // 设置ul的水平位置
                        // $(this).find("ul").animate()
                        console.log(-index*width)
                        // console.log( $(this).find("ul"))
                        _ul.css({
                            marginLeft : -index*width
                        })
                    }

                    // 7.0 鼠标悬停 停止轮播
                    _ul.mouseenter(function(){
                        // 清除定时器
                        clearInterval(timer)
                    })

                    // 8.0 鼠标离开 继续轮播
                    _ul.mouseleave(function(){
                         // 清除定时器
                         clearInterval(timer)
                        //   继续轮播
                         timer = setInterval(changeImage , 1500);
                    })
            }
    }
})(jQuery)