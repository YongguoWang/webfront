// 匀速运动函数
function move(dom,target){
    // 先清除定时器
   clearInterval(dom.timer)
    // 定时器  var timer 
   dom.timer = setInterval(function(){
        // 步长
        var step = 5;
        // 判断是否到达指定位置
        if(dom.offsetLeft == target){
                console.log("到目标位置了")
                clearInterval(dom.timer); //清除定时器
                return ; // 终止代码
        }
        // 设置盒子的位置 = 盒子当前的位置 + 步长
        dom.style.marginLeft=dom.offsetLeft + step +"px";
   },10); // 1.匿名函数   2. 时间（毫秒）

}



//  缓动运动函数
function run(dom,target){
    clearInterval(dom.timer);//先除定时器
    dom.timer = setInterval(function(){
        var step = (target - dom.offsetLeft)/10;  // 步长是每一次计算的结果
        // 处理步长的小数点
        step = step < 0 ? Math.floor(step) : Math.ceil(step);   //  0.12  || -0.12   ////    1 || -1
        // 判断是否达到指定位置
        if(step == 0 ){
            clearInterval(dom.timer);
            return ;
        }
        // 设置盒子目标位置 = 盒子当前的位置 + 步长
        dom.style.marginLeft = dom.offsetLeft + step +"px";
    },30)
}




// 带有回调函数
//  缓动运动函数
function animate(dom,target,callback){
    clearInterval(dom.timer);//先除定时器
    dom.timer = setInterval(function(){
        var step = (target - dom.offsetLeft)/10;  // 步长是每一次计算的结果
        // 处理步长的小数点
        step = step < 0 ? Math.floor(step) : Math.ceil(step);   //  0.12  || -0.12   ////    1 || -1
        // 判断是否达到指定位置
        if(step == 0 ){
            clearInterval(dom.timer);
            // 回调函数
            if(callback){
                callback();
            }
            return ;
            // 在return 下的代码不会被执行
        }
        // 设置盒子目标位置 = 盒子当前的位置 + 步长
        dom.style.left = dom.offsetLeft + step +"px";
    },10)
}


