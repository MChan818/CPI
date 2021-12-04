import { add_product_display } from "./function.js";
import { activate_contador } from "./function.js";

/*--------------------------------------*/

let n_mesas = 4;

//SE UTILIZA UN URL DE UN JSON LOCAL, LUEGO A SER REEMPLAZADO POR UN URL A LA BASE DE DATOS.
//EL JSON FUE CREADO CON NODE.JS, A TRAVES DEL ARCHIVO "SERVER.JS"
const MENUJSON = "js/json/menu.json"

$.get(MENUJSON, function (respuesta, estado) {
    if(estado === "success"){
        for(let i = 1; i<=n_mesas;i++){
            add_product_display(respuesta,i);
            activate_contador(respuesta,i);
        }
    }
})


