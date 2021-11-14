/*IMPORTAMOS JQUERY AL ARCHIVO JAVACRIPT*/
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
/*--------------------------------------*/

let n_mesas = 4;
/*Aca se crean 2 arrays de items (Como prueba) */
const items = [];
items.push(new Item(1,"Bife 1", 400,`imagenes/food1.jpg`));
items.push(new Item(2,"Bife 2", 500,`imagenes/food1.jpg`));
items.push(new Item(3,"Bife 3", 1000,`imagenes/food1.jpg`));

const URLGET = "json/menu.json"

const guardar_productos = (clave,valor) => {
    localStorage.setItem(clave,valor)
};

guardar_productos("ListaProductos", JSON.stringify(items));

console.log(items[0].getDisponible());
items[0].setDisponible(false);
console.log(items[0].getDisponible());