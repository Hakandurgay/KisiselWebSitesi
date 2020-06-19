<?php
$email="hakandurgay@gmail.com";
$sifre="hakan123";

session_start();

if(isset($_SESSION['email']))
{
    echo "<h1>Welcome ".$_SESSION['email']."</h1>";
    echo "<br><a href='cikis.php'><input type=button value=logout name=logout></a>";
}
else{
    if($_POST['email']==$email && $_POST['sifre']==$sifre)
    {
        $_SESSION['email']=$email;

        echo "<script>location.href='login.php'</script>";
    }
    else{
        echo "<script>alert('email veya sifre yanlis')</script>";

        echo "<script>location.href='login.html'</script>";
    }
}

?>