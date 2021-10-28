import ShopCounter from "./shop_counter.js";
import ShopList from "./shop_list.js";

export function activate_contador(item,mesa){
    let counterDisplay = document.querySelector("#cd"+item["id"]+mesa);
    console.log(counterDisplay);
    let contador = 0;

    function updateDisplay(){
        counterDisplay.innerHTML = contador;
    }

    let counterMinus = document.querySelector("#cm"+item["id"]+mesa);
    let counterPlus = document.querySelector("#cp"+item["id"]+mesa);

    updateDisplay();

    counterPlus.addEventListener("click", ()=>{
        contador++;
        updateDisplay();
    });

    counterMinus.addEventListener("click", ()=>{
        contador--;
        if(contador < 0){
            alert("No se puede realizar un pedido menor a 0");
            contador = 0;
        }
        else
            updateDisplay();
    });
}


export function add_product_display(seccion,item,img,mesa){
    new ShopCounter(seccion, item["nombre"], item["precio"], 0, img, item["id"], mesa);
}

export function activate_pedido(root,item,mesa){
    let buy_button = document.querySelector("#buy"+item["id"]+mesa);
    let contador = document.querySelector("#cd"+item["id"]+mesa);
    buy_button.addEventListener("click", ()=>{
        if(contador.innerHTML == 0){
            alert("No puede pedir 0 de un plato");
        }
        else{
            new ShopList(root, item["nombre"], contador.innerHTML);
            contador.innerHTML = 0;
        }
    });
}
