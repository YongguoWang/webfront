<?php

    header("Content-Type:text/html;charset=utf-8");//设置php媒介类型  字符编码

    $data = array("result"=>array("red","blue","green")); //定义数据

    $str =  json_encode($data); //把php对象转成字符串

    // var_dump( $data);
    // echo json_encode($data);

    echo 'foo('.$str.')';  // 输出json格式数据

?>