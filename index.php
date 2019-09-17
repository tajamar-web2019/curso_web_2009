<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Inicio PHP</title>
</head>
<?php
    $title = "Hola mundo desde Otra_Empresa";
?>
<body>
   <header>
        <h1><?= $title ?></h1>
   </header> 
   <?php
        $title = "Seccion 1";
    ?>
   <section>
        <h2><?= $title ?></h2>
   </section>
</body>
</html>