window.onload = function(){
    // 类名操作   ，改变类名  ， 添加类名  ， 删除类名 ，判断是否包含类名

    // 步骤：
        // 1.0 获取元素
        var collectEle = document.getElementsByTagName("div"); // 叫做div的元素的集合
        console.log(collectEle)
        // 2.0 类名操作
        // 2.0.1 改变类名
        collectEle[0].className = "box";
        // 2.0.2 添加类名
        collectEle[1].classList.add("active");
        // 2.0.3 删除类名
        collectEle[0].classList.remove("box");
        // 2.0.4 判断是否包含类名
       var flag = collectEle[1].classList.contains("active");// 返回值是boolean类型  如果存在该类名返回 true  否则flase

       console.log(flag)

}