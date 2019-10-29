<?php 

include_once("conexao.php");
if (empty($_POST['nome']) || empty($_POST['pass'])){
	header('Location: index.php');
	exit();

}
$email = $_POST['nome'];
$senha = $_POST['pass'];

$sql = "select nome from usuario where nome ='{$email}' and senha = '{$senha}'";
$result = mysqli_query($conn,$sql);
$row = mysqli_num_rows($result);
echo $row;

if ($row == 1){
	session_start();
	$_SESSION['nome'] = $email;
	header('Location: menu.php');
	exit();


}else{
	
	header('Location: erro.php');
	exit();

}

mysqli_close($conexao)
 ?>