<?php
    header("Content-Type:text/html;charset=utf-8");
    // echo "test";
    //需求：
        // 接收前端提交的参数
        // 返回一个对象，包含图片路径，图片文本信息
        $arrImg  = array("../images/安室透.jpg","../images/毛利小五郎.jpg","../images/柯南.jpg");
        // 打印
        // var_dump($arrImg);
        // 接收提交的参数
        // $page = $_POST['page'];
        $page = $_GET['page'];
        // 返回给前端的数据
       $dataStr =  json_encode(array('src'=>$arrImg[$page],"text"=>"图片文本"));
        echo  $dataStr ;
?>