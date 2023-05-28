<?php


class IndexController {


    //CONSTRUCTOR
    public function __construct()
    {
        //INCIALIZACION DE MODELOS
    }


    //VISTA HOME
    public function Home()
    {
        try {
            include_once('views/home/home.php');
        } catch (Exception $th) {
            echo $th->getMessage();
        }
    }
}