<?php
header("Content-type:text/html;charset=UTF-8");
$data=file_get_contents('php://input');
$arr=json_decode($data,true);

$Uaccount=$arr['user'];
$Uproductid=$arr['productid'];
$resp=true;

$servername = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname="shoppingweb";

// 创建连接
$conn = new mysqli($servername, $dbusername, $dbpassword,$dbname,3306);
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

$sql="DELETE FROM orderlist
    WHERE user='$Uaccount' AND productid='$Uproductid'";

if($conn->query($sql)===TRUE){
    $resp=true;
}
else{
    $resp=false;
}

echo($resp);
$conn->close();
?>