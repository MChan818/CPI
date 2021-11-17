import { add_product_display } from "./function.js";
import { activate_contador } from "./function.js";

/*--------------------------------------*/

let n_mesas = 4;

const MENUJSON = "js/json/menu.json"

$.get(MENUJSON, function (respuesta, estado) {
    if(estado === "success"){
        for(let i = 1; i<=n_mesas;i++){
            add_product_display(respuesta,i);
            activate_contador(respuesta,i);
        }
    }
})


