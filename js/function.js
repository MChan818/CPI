import ShopCounter from "./shop_counter.js";
/*IMPORTAMOS JQUERY AL ARCHIVO JAVACRIPT*/
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
/*--------------------------------------*/


export function activate_contador(items,mesa){
    //ACA ACTIVAMOS LOS CONTADORES
    for(let i = 0; i < items.length; i++){
        let counterDisplay = document.querySelector("#cd"+items[i]["id"]+mesa);
        let contador = 0;

        function updateDisplay(){
            counterDisplay.innerHTML = contador;
        }
        
        let counterMinus = document.querySelector("#cm"+items[i]["id"]+mesa);
        let counterPlus = document.querySelector("#cp"+items[i]["id"]+mesa);

        updateDisplay();

        counterPlus.addEventListener("click", ()=>{
            contador++;
            updateDisplay();
        });
        // counterPlus.click(()=>{
        //     contador++;
        //     updateDisplay();
        // });

        counterMinus.addEventListener("click", ()=>{
            contador--;
            if(contador < 0){
                alert("No se puede realizar un pedido menor a 0");
                contador = 0;
            }
            else
                updateDisplay();
        });
        //ACA ACTIVAMOS LOS PEDIDOS
        let buy_button = document.querySelector("#buy"+items[i]["id"]+mesa);

        // let list = document.querySelector('#list_mesa'+mesa);

        buy_button.addEventListener("click", ()=>{
            if(counterDisplay.innerHTML == 0){
                alert("No puede pedir 0 de un plato");
            }
            else{
                // new ShopList(list, items[i]["nombre"], counterDisplay.innerHTML);
                $("#list_mesa"+mesa).append(`<p class="text-list"><strong>${items[i]["nombre"]} x </strong>${counterDisplay.innerHTML}</p>`);
                counterDisplay.innerHTML = 0;
                contador = 0;
            }
        });
    }
}


export function add_product_display(items,mesa){
   let root = document.querySelector('#menu'+mesa);
    for(let i = 0; i < items.length; i++){
        new ShopCounter(root, items[i]["nombre"], items[i]["precio"], 0,  items[i]["img"], items[i]["id"], mesa);
    }
}
