export class Item{
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
    getID(){
        return this.id;
    }
    setDisponible(valor){
        if(valor == true)
            this.disponible = true;
        else
            this.disponible = false;
    }
}