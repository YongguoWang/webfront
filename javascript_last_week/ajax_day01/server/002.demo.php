<?php 

        header( 'Content-Type:text/html;charset=utf-8;'); // 设置字符编码 

        // 接收提交的参数
        $bgColor = $_GET['color'];

        // 返回 $bgColor 的值
        echo $bgColor;

?>