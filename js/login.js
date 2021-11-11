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


// CHEQUEO QUE ESTEN BIEN CREADOS LOS USUARIOS
console.log(usuarios[0].usuario);
console.log(usuarios[1].usuario);
console.log(usuarios[2].usuario);

function validar(){
    let x = document.forms["form_login"]["inputuser"].value;
    let y = document.forms["form_login"]["inputpassword"].value;
    let contador = 0;

    if(x == "" || y == ""){
        alert("Se deben rellenar todos los espacios");
        return false;
    }

    for(let i = 0; i < usuarios.length; i++){
        if(x == usuarios[i].getUsuario() && y == usuarios[i].getContrasena()){
            alert("Bienvenido"+" "+usuarios[i].getUsuario())
            window.location.href = 'pedido.html';
            return true;
        }
        else
            contador++;

        if(contador == usuarios.length){
            alert("El usuario y/o contrseñan no existen/coinciden");
            return false;
        }
    }

}