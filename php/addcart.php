<?php
header("Content-type:text/html;charset=UTF-8");
$data=file_get_contents('php://input');
$arr=json_decode($data,true);

$Uaccount=$arr['user'];
$Uproductid=$arr['productid'];
$Uname=$arr['name'];
$Uprice=$arr['price'];
$resp=true;

// 连接数据库
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

$sql="SELECT * FROM cartlist WHERE user='$Uaccount'";
$result=$conn->query($sql);
if($result->num_rows>0){
    while($row =$result->fetch_assoc()){
        if($row['productid']==$Uproductid){
            $resp=false;
            echo($resp);
            $conn->close();
            return;
        }
    }
}

$resp=true;

$sql="INSERT INTO cartlist(user,productid)
        VALUES('$Uaccount','$Uproductid')";
if($conn->query($sql)===TRUE){
    $resp=true;
}
else{
    $resp=false;
}

echo($resp);

$conn->close();

?>