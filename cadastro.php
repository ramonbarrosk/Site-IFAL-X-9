<?php
include_once('conexao.php');
$nome = $_GET['username'];
$funcao = $_GET['function'];
$codigo = $_GET['code'];
$senha = $_GET['pass'];
$sql = "INSERT INTO usuario (nome,funcao,codigo,senha) VALUES ('$nome','$funcao','$codigo','$senha')";

if (mysqli_query($conn, $sql)) {
	echo "cadastrado com sucesso!";
} else {
	echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);

?>