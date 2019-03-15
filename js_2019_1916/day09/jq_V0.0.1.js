//  获取元素的css属性值
function getStyle(dom , attr){

    if(window.getComputedStyle){
      return  window.getComputedStyle(dom ,null)[attr]; //  getComputedStyle()  该方法是获取指定元素的css属性值
    }else {
        // 兼容IE低版本浏览器
       return  dom.currentStyle[attr];
    }

}


// 封装缓动
function move(dom,target){
    clearInterval(dom.timer);
    dom.timer = setInterval(function(){
        var speed =( target-dom.offsetLeft)/10;
        speed =  speed < 0 ? Math.floor(speed) : Math.ceil(speed);
        if(speed == 0){
            clearInterval(dom.timer);
            return ;
        }
        dom.style.marginLeft=dom.offsetLeft + speed+"px";
    },30)
}


// 继续封装缓动框架
function changeStyle (dom,options){
    // 先除定时器
    clearInterval(dom.timer);
    // 绑定属性
    dom.timer = setInterval(function(){
        // 定义一个布尔值
        var isChange = true;
        for(var k in options){ // k : css 属性名   options[k] : css属性值
            // 步长 = 目标位置（属性值） - 盒子当前位置（属性值）
            //  目标位置（属性值)  options[k]
            // 盒子当前位置（属性值） getComputedStyle(dom,null)[k]       100px    parseInt()  100
            var speed = ( options[k] - parseInt(getComputedStyle(dom,null)[k]))/10

            // 判断是否达到目标属性值
            speed = speed < 0? Math.floor(speed):Math.ceil(speed);
            if(parseInt(getComputedStyle(dom,null)[k])!=options[k]){
                isChange = false;
            }

            // 设置dom的css样式 
            // 目标位置（属性值） = 盒子当前位置（属性值） + 步长
            dom.style[k] = parseInt(getComputedStyle(dom,null)[k]) +speed+"px";
            // 判断是否达到目标属性值
            // if(speed != 0 ){
            //     isChange = false;
            // }
        }
        // 已经达到目标属性值
        if(isChange==true){
            clearInterval(dom.timer); // 清除定时器
            return ; //终止代码
        }
    },30)
}


