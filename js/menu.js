import ShopList from "./shop_list.js"
import { Item } from "./classes/items.js";
import { add_product_display } from "./function.js";
import { activate_contador } from "./function.js";
import { activate_pedido } from "./function.js";

/*Aca se crean las secciones por Mesa */
const root = document.querySelector('#menu1');
const root2 = document.querySelector('#menu2');
const root3 = document.querySelector('#menu3');
const root4 = document.querySelector('#menu4');
//Aca se crean las listas por Mesa
const list1 = document.querySelector('#list_mesa1');
const list2 = document.querySelector('#list_mesa2');
const list3 = document.querySelector('#list_mesa3');
const list4 = document.querySelector('#list_mesa4');
/*-----------------------------------*/
const items = [];
items.push(new Item(1,"Bife 1", 400));
items.push(new Item(2,"Bife 2", 350));
items.push(new Item(3,"Bife 3", 400));
items.push(new Item(4,"Bife 4", 400));
items.push(new Item(5,"Bife 5", 400));
items.push(new Item(6,"Bife 6", 400));

/*----------------------------------------*/
//--------------------------CONTADOR BOTONES-------------------------------------//
/*
NOTA: Puedo aplicar la funcion con un ciclo for, sacando la length de la cantidad de articulos
desde la base de datos. En ppio, utilizo la funcion la cantidad de veces como productos haya

NOTA2: Como explicó el tutor, el archivo "shop_counter.js" lo dejare de utilizar cuando pueda sacar los articulos
desde una base de datos.
*/
/*-----------------------------*/
add_product_display(root, items[0], `imagenes/food1.jpg`);
add_product_display(root, items[1], `imagenes/food1.jpg`);
add_product_display(root, items[2], `imagenes/food1.jpg`);
add_product_display(root2, items[0], `imagenes/food1.jpg`);
add_product_display(root2, items[1], `imagenes/food1.jpg`);
add_product_display(root2, items[2], `imagenes/food1.jpg`);
activate_pedido(list1, items[0]);
activate_pedido(list1, items[1]);
activate_pedido(list1, items[2]);

/*DUDA: SI PONGO activate_contador DENTRO DE LA FUNCION ADD_PRODCUCT_DISPLAY, SOLO FUNCIONA CON EL ULTIMO PRODUCTO */
for(let i = 0; i < 5; i++){
    activate_contador(items[i]["id"]);
}


