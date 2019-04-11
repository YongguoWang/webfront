<?php

    //  写数据接口
    // 数组
    $data = array("red","green","blue");

    // 接收前端提交参数
    $index = $_GET["index"];

    // 处理数据
    $str = $data[$index];

    // 输出$str
    echo $str;

?>