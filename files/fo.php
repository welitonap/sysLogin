<?php
class getRe{
  public static function text($x){
    $txt = "";
        if($x == "lg"){
            $txt = <<<txt
                        <div class="pblack"> <ul class="forCd"> <li>
                        <input type="text">   <input type="text"> </li> <li>
                        <button type="button" name="vr">Login</button>
                        </li> </ul> </div>
          txt;
        }

        if($x == "cd"){
          $txt = <<<txt
                    <div class="pblack"> <ul class="forCd"> <li>
                          <input type="text">
                          <input type="text">
                          <input type="text">
                          <input type="text">
                          <input type="text">
                        </li> <li>
                          <button type="button" name="vr">Login</button>
                        </li> </ul> </div>
          txt;
        }

        if($x == "logiOff"){
          $txt = <<<txt
                        <div id="subMenu" class="one">
                          <span id="inLog">Login</span>
                          <span id="inCad">Cadastro</span>
                        </div>
                        <script src="js/bl.js"></script>
          txt;
        }
        return $txt;
      }
}
?> 