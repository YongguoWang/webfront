<?php

   //echo  "var name= 'xiaohong' "; // javascript 脚本

   $data = array("message"=>"这是跨域呀！");

   $str = json_encode($data);

   echo "foo('".$str."')";

?>