<?php 
session_start();
if (isset($_SESSION['nome'])){
    header("Location: inicio.php");
	

}
else{

	echo "<a href='index.html'>INICIO</a>";
}
?>
