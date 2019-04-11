##### 今天内容
1.0 jQuery 的学习
1.0.1 下载jqeruy并体验
- 打开jquery文档 ， 下载jquery.js文件

- npm install jquery 
```
1.0 安装nodejs软件
2.0  在指定的工作目录，按着 shift 按键  ，右击鼠标 ，---> '在此处打开命令窗口/power shell 窗口'
3.0 在命令面板输入  npm install jquery  / npm install jquery@1.11.1
4.0 在 node_modules 目录，里找到 dist 文件夹 ，然取出 jquery.js / jquery.min.js 
5.0 引入html文件就可以了
```

1.0.2 jquery是什么？
- jquery就是js封装的一个脚本文件。里面包含许多已经封装好的方法。通俗的说， 它是一个js工具库（工具箱）。

1.0.3 怎么使用？
- jquery 里面有个入口函数
```
第一种方法
$(function(){
    // to do list 
})

第二种方法
$(document).ready(function(){
    // to do list 
})

// to do list (代办的事项)

```
1.0.4 原生js获取的元素 跟 jquery获取的元素怎么转换 ？

javascript                              jquery 

dom                                     $ele

dom         ----- >               $(dom)

$ele[0]    <--------               $ele
$ele.get(0)


1.0.5 如何学习一个jquery的api(方法)？
a. 调用者    b.参数  c.返回值   d.功能


1.0.6 css() ？

1.0.7 siblings()? 

1.0.8 html() ?  text();
innerHTML / innerText 

1.0.9 选择器
$("ul li:odd")
$("ul li:even")

$("ul li:eq(0)")
$("ul li").eq(0)
$("ul").find(li)
$("ul").children(li)