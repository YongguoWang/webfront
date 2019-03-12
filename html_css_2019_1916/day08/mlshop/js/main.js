/**
 * Created by newuser on 2019/2/21.
 */
window.onload = function(){
    // 1.0 获取相关元素
    var aLi = document.querySelectorAll(".yg_banner > div .left ul li");
    var content = document.querySelector(".yg_banner > div .content");
    var banner = document.querySelector(".yg_banner > div");
    //2.0 循环遍历
    for(var i = 0 ; i < aLi.length;i++){
        //属性绑定
        aLi[i].index = i ;
        //鼠标悬停事件绑定
        aLi[i].onmouseover = function(){
            //显示相关盒子
            content.style.display = "block";
            //设置content的文本
            content.innerHTML = this.index;
        }
    }
    //鼠标离开事件绑定
    banner.onmouseleave = function(){
        content.style.display = "none";
    }

}