function func(e) {
    if(e.target.value==e.target.getAttribute("min")){
    e.target.value="";
    }
  }
  document.getElementById("costoKW").addEventListener('click', func);
  document.getElementById("costoKW").addEventListener('keyup', function(e){e.target.click()})