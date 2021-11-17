import { Item } from "./classes/items.js";
import ShopCounter from "./shop_counter.js";
/*IMPORTAMOS JQUERY AL ARCHIVO JAVACRIPT*/


export function activate_contador(items,mesa){
    //ACA ACTIVAMOS LOS CONTADORES
    $(document).ready(function() {
        
        for(let i = 0; i < items.length; i++){
            let counterDisplay = document.querySelector("#cd"+items[i]["id"]+mesa);
            let contador = 0;

            function updateDisplay(){
                counterDisplay.innerHTML = contador;
            }

            updateDisplay();
            
            //CONTADOR POSITIVO
            $("#cp"+items[i]["id"]+mesa).click(function(){
                contador++;
                updateDisplay();
            });
            //CONTADOR NEGATIVO
            $("#cm"+items[i]["id"]+mesa).click(function(){
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

            let ItemEnLista = [];

            $("#buy"+items[i]["id"]+mesa).click(function(){
                if(counterDisplay.innerHTML == 0){
                    alert("No puede pedir 0 de un plato");
                }
                else{
                    let x = 0;
                    ItemEnLista.push(new Item(items[i]["id"],items[i]["nombre"],items[i]["precio"],items[i]["img"]));
                    $("#list_mesa"+mesa).append(`
                    <div class = "list-container">
                        <div class = "list-text-container">
                            <p class="text-list"><strong>${ItemEnLista[x]["nombre"]} x </strong>${counterDisplay.innerHTML}</p>
                        </div>
                        <div class = "list-button-container">
                            <button class="button-delete" id="delete-item">
                                Borrar Pedido        
                            </button>
                        </div>
                    </div>`);
                    counterDisplay.innerHTML = 0;
                    contador = 0;
                    x++;
                    console.log(ItemEnLista);
                    $("#delete-item").click(function() {
                        ItemEnLista.splice(i,1);
                        console.log(ItemEnLista);
                    })
                }
                //-------------------------------------------------------

                //------------------------------------------------------
            });

        }
    })
};


export function add_product_display(items,mesa){
   let root = document.querySelector('#menu'+mesa);
    for(let i = 0; i < items.length; i++){
        new ShopCounter(root, items[i]["nombre"], items[i]["precio"], 0,  items[i]["img"], items[i]["id"], mesa);
    }
}
