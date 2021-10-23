class Item{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.disponible = true;
    }

    getNombre(){
        return this.nombre;
    }
    getPrecio(){
        return this.precio;
    }
    getStock(){
        return this.stock;
    }
    getDisponible(){
        return this.disponible;
    }
    setDisponible(valor){
        if(valor == 1)
            this.disponible = true;
        else
            this.disponible = false;
    }
}

//CONTADOR PARA PEDIDOS
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
    }
    else
        updateDisplay();
});
