// window.pageYOffset
// Las propiedades pageXOffset y pageYOffset devuelven los píxeles del documento actual que se ha desplazado desde la esquina superior izquierda de la ventana, horizontal y verticalmente.

// Las propiedades pageXOffset y pageYOffset son iguales a las propiedades scrollX y scrollY.

// Estas propiedades son de solo lectura.

let d = document;
let ubicacionEnY = window.pageYOffset;
// console.log(ubicacionEnY);

// El evento onscroll ocurre cuando se desplaza la barra de desplazamiento de un elemento.

//   Consejo: use la propiedad de estilo de desbordamiento(overflow) CSS para crear una barra de desplazamiento para un elemento.

let topbarColapsado = (topBar) => {

  window.onscroll = () => {
    let desplasamiento = window.pageYOffset;
    //Condicional preguntamos: Si ubicacionEnY que es en 0 es mayor o igual desplasamiento, lo cual es verdadero un vez que desplasamiento de el scroll pues este cambia de valor a mas de 0, se cumple la primera instruccion.
    if (ubicacionEnY >= desplasamiento) {
      // console.log(ubicacionEnY);
      d.querySelector(topBar).style.top = '0';
    } else {
      d.querySelector(topBar).style.top = '-100px';
    }
    ubicacionEnY = desplasamiento;
  }
}

export default topbarColapsado;