<?php

//CONTROLADORES
include_once('controllers/IndexController.php');

$IndexController = new IndexController();


//RUTAS
if (!isset($_REQUEST['ruta'])) {
  $IndexController->Home();
} else {
  $peticion = $_REQUEST['ruta'];

  if (method_exists($IndexController, $peticion)) {
    call_user_func(array($IndexController, $peticion));
  }
}
