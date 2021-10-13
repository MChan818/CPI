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
        return this.nombre;
    }
    getStock(){
        return this.nombre;
    }
    getDisponible(){
        return this.nombre;
    }
    setDisponible(valor){
        if(valor == 1)
            this.disponible = true;
        else
            this.disponible = false;
    }
}