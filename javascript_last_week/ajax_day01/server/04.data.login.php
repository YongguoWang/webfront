<?php
      header("Content-Type:text/html;charset=utf-8");
    //   $  声明一个变量
    // echo 页面输出内容
    // $_GET[];
    // $_POST[];
    // 模拟登陆
    // array 定义数组的意思
    $user = array("username"=>"admin","password"=>"123456");
    // 访问登陆地址 响应回来的数据
    $result = array("success"=>array("message"=>"successfull","username"=>"admin","status_code"=>0) ,"error"=>array("message"=>"fail","status_code"=>1));
    // var_dump()   打印数组的意思
    // var_dump($result);
    // 输出 admin
    // echo  $user["username"];
    $uname = $_GET['username']; // 接收提交的参数
    // echo $uname ;
    $pwd = $_GET['password']; 
    // echo  $pwd  ;
    // 判断账号密码是否正确
    if($uname == $user["username"]  && $pwd == $user["password"]  ){
                $dataStr = json_encode($result["success"]);// 对php数组进行解码
                // echo "success";
                echo  $dataStr ;//输出
    }else {
              $dataStr = json_encode($result["error"]);
              echo    $dataStr;
    }
?>