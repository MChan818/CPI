import { Item } from "./classes/items.js";
import { add_product_display } from "./function.js";
import { activate_contador } from "./function.js";

let n_mesas = 4;
/*Aca se crean 2 arrays de items (Como prueba) */
const items = [];
items.push(new Item(1,"Bife 1", 400,`imagenes/food1.jpg`));
items.push(new Item(2,"Bife 2", 500,`imagenes/food1.jpg`));
items.push(new Item(3,"Bife 3", 1000,`imagenes/food1.jpg`));

/*----------------------------------------*/
//--------------------------CONTADOR BOTONES-------------------------------------//
/*
NOTA: Puedo aplicar la funcion con un ciclo for, sacando la length de la cantidad de articulos
desde la base de datos. En ppio, utilizo la funcion la cantidad de veces como productos haya

NOTA2: Como explicó el tutor, el archivo "shop_counter.js" lo dejare de utilizar cuando pueda sacar los articulos
desde una base de datos.

Edit 04-11-2021: Generalice la funciones para que con el array y la mesa se active.
*/
/*-----------------------------*/
for(let i = 1; i<=n_mesas;i++){
    add_product_display(items,i);
    activate_contador(items,i);
}





