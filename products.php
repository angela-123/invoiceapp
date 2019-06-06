<?php

mysql_connect('localhost','root','mayana') or die('not connected');
mysql_select_db(invoicing) or die('Cant connetc');
$info = json_decode(file_get_contents("php://input"));
$cname = mysql_real_escape_string($info->name);
$address = mysql_real_escape_string($info->address);
$phone = mysql_real_escape_string($info->phone);
$email = mysql_real_escape_string($info->email);

echo $cname,$address,$phone,$email;

$xion = "insert into customers(customername,address,phoneno,email)values('$cname','$address','$phone','$email')";

mysql_query($xion) or die('cant insert');
 ?>