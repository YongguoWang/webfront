### 回顾昨天的知识点
1.  jquery 是一个工具库。

2. 使用jquery，先下载jquery文件。

3. jquery的入口函数
```

$(function(){


})

```
4. js元素对象。
dom.onclick = function(){
    this.style.color="red"
}

5. jquery 元素对象
$("div").click(function(){
    $(this).css("color","red")
})

6. js元素对象和jquery元素对象进行互换。

js ----> jquery
 dom ---> $(dom)

 jquery ----- > js
 $("div") -----> $("div").get(0)
  $("div") -----> $("div")[0]

  7. 选择器

$("ul li:odd")
$("ul li:even")
$("ul li").eq(4) //
$("ul").find("li")
$("ul").children()
$("ul li").parent()
$("ul li").siblings()
...

8.jquery 事件
$(selector).click()
$(selector).mouseover()
$(selector).mouseout()
$(selector).mouseenter()
$(selector)..mouseleave()
...

9. $(selector).css()

a. 调用者 ：  $(selector) 
b.参数 ：{属性，属性值 }
 c.返回值  ： jquery的元素对象
 d.功能 ： 设置该元素的样式

10. $(selector).html()

a. 调用者 ：  $(selector) 
b.参数 没有参数的时候，获取文本/ 有参数的时候，设置文本  （包含html）
 c.返回值  ： jquery的元素对象
 d.功能 ： 设置/获取该元素的文本内容（包含html）


 ### 今天的内容

1.   显示盒子隐藏盒子 
$(selector).show()   $(selector).hide()