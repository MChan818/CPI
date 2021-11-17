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

//ACA OBTENEMOS LOS USUARIOS DE UN ARCHIVO JSON LOCAL
const USUARIOSJSON = 'js/json/users.json'

$.getJSON(USUARIOSJSON, function (respuesta, estado) {
    if(estado === "success"){
        for(let i = 0; i < 10; i++){
            usuarios[i] = respuesta[i];
        }
    }
});

console.log(usuarios);

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
            window.location.href = 'home.html';
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
