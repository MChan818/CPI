export class Usuario{
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