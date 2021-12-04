// import { Item } from "./classes/items.js";
import ShopCounter from "./shop_counter.js";
// import { Usuario } from "./classes/user.js";
import { ItemList } from "./classes/list.js";

export function activate_contador(items,mesa){
    let ItemEnLista = [];
    let list_counter = 0;
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

            $("#buy"+items[i]["id"]+mesa).click(function(){
                // for(Item of ItemEnLista){
                //     if(ItemEnLista[x][]])
                // }
                if(counterDisplay.innerHTML == 0){
                    alert("No puede pedir 0 de un plato");
                }
                else{            
                    ItemEnLista.push(new ItemList(items[i],counterDisplay.innerHTML));

                    $("#list_mesa"+mesa).append(`
                    <div class = "list-container borrar${items[i]["id"]}">
                        <div class = "list-text-container">
                            <p class="text-list"><strong>${items[i]["nombre"]} x </strong>${counterDisplay.innerHTML}</p>
                        </div>
                        <div class = "list-button-container">
                            <button class="button-delete delete-item${items[i]["id"]}">
                                Borrar Pedido        
                            </button>
                        </div>
                    </div>`);
                    
                    $(".delete-item"+items[i]["id"]).click(function() {
                        let pos = ItemEnLista.map(function(e){return e.item.id;}).indexOf(items[i]["id"]);
                        console.log(pos);
                        ItemEnLista.splice(pos, 1);
                        console.log(ItemEnLista);
                        $(".borrar"+items[i]["id"]).empty();
                    })
                    counterDisplay.innerHTML = 0;
                    contador = 0;
                    // console.log(ItemEnLista);
                    // console.log(ItemEnLista[i].item.id);
                    localStorage.setItem("Lista"+mesa,JSON.stringify(ItemEnLista));
                    
                    //BOTON DE "BORRAR PEDIDO"
                    
                }
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
