<?php
header("Content-type:text/html;charset=UTF-8");
$data=file_get_contents('php://input');
$arr=json_decode($data,true);

$Uaccount=$arr['username'];
$Upassword=$arr['password'];
$Uaddress=$arr['address'];
$Uphone=$arr['phone'];


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

$sql="SELECT * FROM user";
$result=$conn->query($sql);
if($result->num_rows>0){
    while($row = $result->fetch_assoc()){
        if( $row['user']==$Uaccount){
            $resp=false;
            echo($resp);
            $conn->close();
            return;
        }
    }
}
else{
    $resp=true;
}

$sql="INSERT INTO user(user,password,address,phone) 
        VALUES('$Uaccount','$Upassword','$Uaddress','$Uphone')";
if($conn->query($sql)===TRUE){
    $resp=true;
}
else{
    $resp=false;
}


echo($resp);

$conn->close();
?>