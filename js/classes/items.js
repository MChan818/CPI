export class Item{
    constructor(id, nombre, precio,img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
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
        this.disponible = valor;
    }
}