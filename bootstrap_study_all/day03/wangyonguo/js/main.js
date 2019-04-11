$(function(){
    // 1.0 动态渲染轮播图
    // 1.0.1 获取自定义模板的内容（字符串）
    var str =  $("#templateId").html();
    // 1.0.2 定义数据
    var data = [
        {
            url:"./images/slide_01_2000x410.jpg",
            src:"./images/slide_01_640x340.jpg"
        },
        {
            url:"./images/slide_02_2000x410.jpg",
            src:"./images/slide_02_640x340.jpg"
        },
        {
            url:"./images/slide_03_2000x410.jpg",
            src:"./images/slide_03_640x340.jpg"
        },
        {
            url:"./images/slide_04_2000x410.jpg",
            src:"./images/slide_04_640x340.jpg"
        }
    ]
    // 1.0.3调用underscore的模板函数
    // template() // 调用者：_ ; 参数 ： html字符串  ； 返回值 ：函数
    var fn = _.template(str);

    // 1.0.4 数据匹配
    // 调用者 ： 无 ； 参数 ：数据 {} ； 返回值 ：和数据匹配函数字符串（html）
    var strHtml = fn({result:data});

    // 1.0.5 把匹配好的字符串渲染在页面
    $(".wyg_banner").html(strHtml);

    // 1.0.5.1 细节
    // $(".carousel-indicators li").eq(0).addClass("active");
    // $(".carousel-inne .item").eq(0).addClass("active");
    console.log(strHtml)


})