// 封装一个缓动框架函数
function move(dom,target,second){ // 形参  dom  元素  ；target：目标位置 ；second：时间
    target = Math.abs(target);
    dom.onclick = function(){// dom 需要运动的元素
        clearInterval(dom.timer);// 用定时器先清除定时器
        dom.timer = setInterval(function(){// 属性的绑定  var 类似
            var speed = (target-dom.offsetLeft)/10; //步长的处理  步长计算方式：（目标位置 - 当前的位置）/ 10； 作用就是让speed值变小
            var step = speed < 0 ?Math.floor(speed) : Math.ceil(speed);// 避免出现小数点，到不了目标位置
            console.log(step)
            if(dom.offsetLeft >= target){//到达指定位置 
                clearInterval(dom.timer); //清除定时器
                return ; // 到达指定位置  终止执行代码
            }
            dom.style.marginLeft = dom.offsetLeft + step +"px";// 设置元素的marginLeft值（设置盒子的位置）
        },second)
    }
}


// 缓动方法
function animate(dom,target,second){ // 形参  dom  元素  ；target：目标位置 ；second：时间
    clearInterval(dom.timer);// 用定时器先清除定时器
    dom.timer = setInterval(function(){// 属性的绑定  var 类似
        var speed = (target-dom.offsetLeft)/10; //步长的处理  步长计算方式：（目标位置 - 当前的位置）/ 10； 作用就是让speed值变小
        var step = speed < 0 ?Math.floor(speed) : Math.ceil(speed);// 避免出现小数点，到不了目标位置
        console.log(speed)
        if(dom.offsetLeft >= Math.abs(target)){//到达指定位置 
            clearInterval(dom.timer); //清除定时器
            return ; // 到达指定位置  终止执行代码
        }
        console.log(dom.offsetLeft)
        dom.style.marginLeft = dom.offsetLeft + step +"px";// 设置元素的marginLeft值（设置盒子的位置）
    },second)
}