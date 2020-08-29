<?php
header("Content-type:text/html;charset=UTF-8");
$data=file_get_contents('php://input');
echo($data);
?>