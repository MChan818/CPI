import ShopCounter from "./shop_counter.js"

const root = document.querySelector('.menu-row-container');

//ACA ESTA LA DUDA 
const view = new ShopCounter(root, "Bife de Chorizo", 400, 0, `imagenes/food1.jpg`);
const view2 = new ShopCounter(root, "Repetido Bife", 400, 0, `imagenes/food1.jpg`);

//--------------------------CONTADOR BOTONES-------------------------------------//
let counterDisplay = document.querySelector('.counter-display');
let counterMinus = document.querySelector('.counter-minus');
let counterPlus = document.querySelector('.counter-plus');

let contador = 0;

function updateDisplay(){
    counterDisplay.innerHTML = contador;
}

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