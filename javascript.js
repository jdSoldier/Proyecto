var teclas =
{
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("lienzo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;


dibujarLinea("red",149,149,151,151,papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

// la variable evento obtiene todo el detalle del evento
function dibujarTeclado(evento)
{
  // if(evento.keyCode == teclas.UP)
  // {
  //   console.log("Vamo pa arriba");
  // }
  var colorcito = "blue";
  var movimiento = 5;
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito,x,y,x,y-movimiento,papel)
      y=y-movimiento;
      break;
    case teclas.DOWN:
      dibujarLinea(colorcito,x,y,x,y+movimiento,papel)
      y=y+movimiento;
      break;
    case teclas.LEFT:
      dibujarLinea(colorcito,x,y,x-movimiento,y,papel)
      x=x-movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea(colorcito,x,y,x+movimiento,y,papel)
      x=x+movimiento;
      break;
    default:
      console.log("Otra letra");
      break;

  }

}
