class Item{
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

class Usuario{
    constructor(usuario, contrasena, mail, telefono){
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.mail = mail;
        this.telefono = telefono;
    }
    getUsuario(){
        return this.usuario;
    }
    getContrasena(){
        return this.contrasena;
    }
    getMail(){
        return this.mail;
    }
    getTelefono(){
        return this.telefono;
    }
}

const usuarios = [];
usuarios.push(new Usuario("maxi","chan", "hola@gmail.com", "123456"));
usuarios.push(new Usuario("jose","chan", "chau@gmail.com", "123456"));
usuarios.push(new Usuario("carlos","chan", "adios@gmail.com", "123456"));

const items = [];
items.push(new Item(1,"Bife 1", 111,`imagenes/food1.jpg`));
items.push(new Item(2,"Bife 2", 222,`imagenes/food1.jpg`));
items.push(new Item(3,"Bife 3", 333,`imagenes/food1.jpg`));
items.push(new Item(4,"Bife 4", 444,`imagenes/food1.jpg`));
items.push(new Item(5,"Bife 5", 555,`imagenes/food1.jpg`));

const fs = require('fs');

const saveData = (array,url) => {
    const finished = (error) =>{
        if(error){
            console.error(error)
            return;
        }
    }

    const jsonData = JSON.stringify(array);
    fs.writeFile(url, jsonData, finished)
};

saveData(items,'json/menu.json');
saveData(usuarios,'json/users.json');
