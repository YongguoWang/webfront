<?php
    header('Content-Type:application/json;chartset=utf-8');

    $data = file_get_contents('./data.json');

    $result = json_encode($data);

    echo  json_decode($result );
    
?>