<?php



$mobileNo=$_POST['mobileNo'];
$address=$_POST['address'];
$city=$_POST['city'];
$state=$_POST['state'];
$zipCode=$_POST['zipCode'];
$myReferences=$_POST['writerReferences'];

   



session_start();


$Username = $_SESSION['username'];


$servername = "localhost";
$username = "wpRootDatabase";
$password = "orthrox";
$dbname = "whitepanda";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "UPDATE writerprofile SET mobileNo='".$mobileNo."', address='".$address."', city='".$city."', state='".$state."', zipCode='".$zipCode."', myReferences='".$myReferences."' WHERE email='".$Username."'";

if ($conn->query($sql) === TRUE) {
    
    header("Location: ../../writers");
    
} else {
    header("Location: ../../writers");
}

$conn->close();

?>