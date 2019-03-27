<?php
    header('Content-Type:application/xml;charset=utf-8');

    $str =  file_get_contents('./data.xml');

    echo $str;
?>