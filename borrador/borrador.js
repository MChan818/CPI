class Item{
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = true;
    }

    getNombre(){
        return this.nombre;
    }
    getPrecio(){
        return this.precio;
    }
    getDisponible(){
        return this.disponible;
    }
    setDisponible(valor){
        if(valor == true)
            this.disponible = true;
        else
            this.disponible = false;
    }
}

//CONTADOR PARA PEDIDOS
let contador_all = [];
for(let i = 0; i < contador_all.length; i++){
    contador_all[i] = 0;
}


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