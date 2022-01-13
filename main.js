var cajas = document.getElementsByTagName('div');
// var cajas = document.getElementsByClassName('caja');
var primeraCaja = document.getElementById('primera');


// primeraCaja.textContent = 'Hola Mundo!';
primeraCaja.innerHTML = '<h1>DOM!!</h1>';


var caja = document.createElement('div');

var contenido = document.createTextNode('DOM - Modelo de Objetos de Documentos');

caja.appendChild(contenido);

caja.setAttribute('class', 'caja naranja');


// var contenedor = document.getElementById('contenedor');
// contenedor.appendChild(caja);


caja.id = 'primera';
caja.className = 'caja naranja';

var padre = cajas[0].parentNode;

// padre.insertBefore(caja, primeraCaja);
padre.replaceChild(caja, cajas[2]);

padre.removeChild(cajas[3]);