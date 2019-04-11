<?php
    header("Content-Type:text/html;charset=utf-8");

    $str = file_get_contents('./data.xml');

    echo $str;
    ?>