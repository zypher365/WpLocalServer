<?php 
include('db_conn.php');

if (isset($_POST['writerEmail']))
{
    $writerEmail=$_POST['writerEmail'];
    
    $conn->query("UPDATE writerprofile SET uploaded='0', claimedOrderID='0' WHERE email='".$writerEmail."'");
}
?>