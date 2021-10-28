import ShopCounter from "./shop_counter.js";
import ShopList from "./shop_list.js";

export function activate_contador(id){
    let counterDisplay = document.querySelector("#cd"+id);
    let contador = 0;

    function updateDisplay(){
        counterDisplay.innerHTML = contador;
    }

    let counterMinus = document.querySelector("#cm"+id);
    let counterPlus = document.querySelector("#cp"+id);

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


export function add_product_display(seccion,item,img){
    new ShopCounter(seccion, item["nombre"], item["precio"], 0, img, item["id"]);
}

export function activate_pedido(root,item){
    let buy_button = document.querySelector("#buy"+item["id"])
    console.log(buy_button);
    let contador = document.querySelector("#cd"+item["id"]);
    buy_button.addEventListener("click", ()=>{
        new ShopList(root, item["nombre"], contador.innerHTML);
    });
}
