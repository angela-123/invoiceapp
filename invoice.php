<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
    </head>
    <body>
       <?php
       mysql_connect('localhost','root','mayana') or die('not connected');
       mysql_select_db(invoicing) or die('Cant connect');
       $info = json_decode(file_get_contents("php://input"));
       $cname = mysql_real_escape_string($info->cname);
       $pname = mysql_real_escape_string($info->pname);
       $qty = mysql_real_escape_string($info->qty);
       $rate = mysql_real_escape_string($info->rate);
       $date = mysql_real_escape_string($info->date);
       $invoice = mysql_real_escape_string($info->invoice);
       
       $tx = "insert into sales(sdate,customer,productname,qty,rate,,invno)values('$date','$cname','$pname','$qty','$rate',  '$invoice')";
        mysql_query($tx) or die('cant insert');
   
        ?>
    </body>
</html>