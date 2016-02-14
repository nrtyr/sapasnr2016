


<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title>Nicolás Romero 2016 - 2018 Trabajo y Resultados</title>

  <link rel="stylesheet" href="css/stylePop.css">
	<link rel="stylesheet" href="css/animate.min.css">
  <link rel="stylesheet" href="css/jquery.modalBox.css">
</head>
<body onload="popImg()">

	<div class="modal-box" id="modal-content">
    <div class="inner">
        <button class="close">&times;</button>
        <a href="../ayuntaBando.php"><img src="img/bando.jpg"  class="imagenPop" alt=""></a>
    </div>
	</div>

<iframe src="../index.php" frameborder="0"></iframe>

<script src="js/jquery-1.11.3.min.js"></script>
<script src="js/jquery.modalBox.js"></script>

<script>
  function popImg(){
    $('#modal-content').modalBox("open",{openAnimationEffect:'bounceIn',closeAnimationEffect:'bounceOut'});
  }
</script>



</body>
</html>