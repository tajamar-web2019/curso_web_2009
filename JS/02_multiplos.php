<?php
$limite = 10
$acumulador = 0
$maximo = 100
$contador = 0
for ($i = 0; $i < $limite; $i++) {
    $contador = $i
    echo $i
    if ( $acumulador + ($i*$i) > $maximo) {
        break
    }
    $acumulador += ($i*$i)
}
echo $acumulador.', '.$contador