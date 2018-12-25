<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Tetris</title>
<style>
	body
	{
		background: #000;
		display : flex;
		color : #fff;
		font-family: sans-serif;
		font-size : 2em;
		text-align : center;
	}
	
	.player
	{
		flex : 1 1 auto;
	}
	canvas
	{
		border : solid .2em #fff;
		height:90vh; 
	}
	
</style>

</head>
<body>
	<div class="player">
    	<div class="score"></div>
		<canvas class="tetris" width="240" height="400"></canvas>
	</div>
	
	<div class="player">
    	<div class="score"></div>
		<canvas class="tetris" width="240" height="400"></canvas>
	</div>
	
	<script src="Arena.js"></script>
	<script src="Player.js"></script>
	<script src="Tetris.js"></script>
	<script src="tetriss.js"></script>
</body>
</html>