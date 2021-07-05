


  class Platos {
    constructor ({id, nombre, precio, descripcion}){
      
      this.id = parseInt(id),
      this.nombre = nombre,
      this.precio = parseInt(precio),
      this.descripcion = descripcion

    }

  }



let DATOS = [];

let detalles = [];


$(document).ready(function () {

  $.getJSON("data.json", function (data, respuesta) {
      if (respuesta === "success") {
        DATOS =  data
      }

      for (const dato of DATOS) {
        detalles.push(new Platos(dato));
        
      }

      for (const detalle of detalles) {
        $(".caja").append(`<p class="plato">${detalle.nombre}</p>
                        <span class="precio">$${detalle.precio}</span>
                        <span class="descripcion">${detalle.descripcion}</span>
                        <p></p>`);
      }
    }
  );
});








