$(document).ready(function (){
  $("#botonSubirfotos").click(function (){
    var archivo = document.getElementById('input').files[0];
    var reader = new FileReader();

    if (file) {
      reader.readAsDataURL(archivo);
      reader.onloadend = function () {
        document.getElementById("imgShow").src = reader.result;
      }
    }
  });
});
