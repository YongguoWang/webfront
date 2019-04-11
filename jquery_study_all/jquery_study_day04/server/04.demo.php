<?php

// 数据
$data = array("name"=>"白菜","price"=>"1.00","des"=>"绿色无害");
// $callback = "callback()"
// 输出
// echo  "aaa=".json_encode($data);
echo  "callback(".json_encode($data).")";

?>