<?php
header("Content-type:text/html;charset=UTF-8");
$data=file_get_contents('php://input');
$arr=json_decode($data,true);

$Uaccount=$arr['username'];

$servername = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname="shoppingweb";
 
$conn = new mysqli($servername, $dbusername, $dbpassword,$dbname,3306);

if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

class Good {
    public $username = "";
    public $productid="";
    public $name  = "";
    public $price = "";
}

$sql="SELECT * FROM cartlist natural join product
        WHERE cartlist.user='$Uaccount'";
        

$result=$conn->query($sql);
$i=0;
if($result->num_rows>0){
    while($row = $result->fetch_assoc()){
        $ans[$i]=new Good();
        $ans[$i]->username=$row['user'];
        $ans[$i]->productid=$row['productid'];
        $ans[$i]->name=$row['name'];
        $ans[$i]->price=$row['price'];
        $i=$i+1;
    }
}


echo json_encode($ans,JSON_UNESCAPED_UNICODE);

?>