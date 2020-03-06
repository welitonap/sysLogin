<?php

if(!empty($_POST['data'])){
  if($_POST['data'] == "lg" OR $_POST['data'] == "cd"){
    require_once("fo.php");
    echo getRe::text($_POST['data']);
  }
}

class getLog{
  public static function lg($x){
    require_once("fo.php");
    echo getRE::text($x);
  }
}
?>
