$(document).ready(function (){
  $(document).on("change", "#cargarFoto",
    function (){
      console.log(this.files);
      var files= this.files;
      var element;
      var supportedImages= ["image/png"];
      //Máximo 5 fotos
      if(files.length<=5){
        for(let i=0;i<files.length; i++){
          element= files[i];
          if(supportedImages.indexOf(element.type)!=-1) {
            createPreview(element, i);
            console.log("se creó");
          }
        }
        $('#cantidadImg').empty();
        $('#cantidadImg').append('Cantidad de imágenes: '+files.length);
        //Aquí empezamos la creación de un nuevo input file
        /*var newInputFile= createInputFile();
        $("#add-photo-conteiner").append(newInputFile);*/
      }
    });
});

function createPreview(file, index){
  var imgCodified= URL.createObjectURL(file);
  var name= file.name;
  //var img=$('<div id="img"><img style=" width: 132px;height: 100px;" src="'+imgCodified+'"/></div>')

  var img=$('<div id="img"><img style=" width: 132px;height: 100px;" src="https://www.egames.news/__export/1617562106480/sites/debate/img/2021/04/04/pokemon-go_x6x.jpg_172596871.jpg"/></div>')
  $('#imagenes0').append(img);
}
