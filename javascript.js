let tecla = {
  UP: 38,
  DOWN: 40,
  LEFT: 39,
  RIGHT: 37,
};

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento) {
  console.log(evento);
}

$(document).ready(function () {
  // para debug prefiero console.log
  //alert("Hola mundo");
  //let varb=$('button').html();
  //console.log(varb);
  //cambia el contenido de la etiqueta button
  //$('button').html('cambiado')
});
