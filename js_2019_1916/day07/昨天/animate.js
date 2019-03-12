function run(dom,target){
    // 用定时器 先清除定时器
    clearInterval(dom.timer);
    // 给dom绑定一个属性 
    dom.timer = setInterval(function(){
        // 定义一个变量   (目标位置-盒子当前的位置)/10
        var speed = (target - dom.offsetLeft)/10;
        // 步长
        var step = speed < 0 ? Math.floor(speed) : Math.ceil(speed);
        // 数学的绝对值  是 一个正数   Math.abs(target)  
        // if(Math.abs(dom.offsetLeft) >= Math.abs(target)){
        //     clearInterval(dom.timer);
        //     return ;
        // }

        // step 步长等于0 说明已经到达目标位置
        if(step == 0 ){
            clearInterval(dom.timer);
            return ;
        }
           // 目标位置：盒子当前的位置+步长
           dom.style.marginLeft=dom.offsetLeft+step+"px";
        // dom.style.left=dom.offsetLeft+step+"px";
        //    console.log(dom.offsetLeft)
    },30)
}

// run(document.querySelector("ul") , -500);