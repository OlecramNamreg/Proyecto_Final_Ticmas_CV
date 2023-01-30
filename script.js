var puesto = document.getElementsByClassName("puesto");
// var descripcion=document.getElementsByClassName("descripcion");
// console.log(descripcion);
// descripcion.style=' display:none';

for (var i = 0; i < puesto.length; i++) {
  puesto[i].addEventListener("click", function() {
     var content = this.nextElementSibling;
    console.log(content);
    var content2= content.nextElementSibling;
    console.log(content2);
    if (content.style.display === "none") {
        content.style.display = "block";
        content2.style.display="none";
    } else {
      content.style.display = "none";
      content2.style.display="block";
    }
  });
}