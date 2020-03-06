class func{
  lg(x){
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
         document.getElementById("ctbody").innerHTML = this.responseText;
          // res += this.responseText;
      }
    }
    xml.open("POST","files/in.php",true);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send("data="+x);
  }

  obj() {
    var x = {
      oneAdd: function(){
        document.getElementById("subMenu").classList.remove("one");
      },
      twoRem: function(){
        document.getElementById("subMenu").classList.add("two");
      },
      oneRem: function(){
        document.getElementById("subMenu").classList.add("one");
      },
      twoAdd: function(){
        document.getElementById("subMenu").classList.remove("two");
      },
      btLogin: function(){
        var f = new func();
        document.getElementById("ctbody").addEventListener("click", function(){
          f.obj().oneRem();
          f.obj().twoAdd();
        });
        document.getElementById("inCad").addEventListener("click", function(){
          f.lg("cd");
          f.obj().oneRem();
          f.obj().twoAdd();
        });
        document.getElementById("inLog").addEventListener("click", function(){
          f.lg("lg");
          f.obj().oneRem();
          f.obj().twoAdd();
        });
      }
    }
    return x;
  }
}

document.getElementById("userImg").addEventListener("click", function(){
  var x = new func();
  x.obj().oneAdd();
  x.obj().twoRem();
  x.obj().btLogin();
});
