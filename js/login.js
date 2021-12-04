//ACA OBTENEMOS LOS USUARIOS DE UN ARCHIVO JSON LOCAL
const USUARIOSJSON = 'js/json/users.json'

function validar(){
    $.getJSON(USUARIOSJSON, function (respuesta, estado) {
        if(estado === "success"){
            console.log(respuesta)

                let x = document.forms["form_login"]["inputuser"].value;
                let y = document.forms["form_login"]["inputpassword"].value;
                console.log(x);
                console.log(y);
                let contador = 0;
            
                if(x == "" || y == ""){
                    alert("Se deben rellenar todos los espacios");
                    return false;
                }

                for(let i = 0; i < respuesta.length; i++){
                    if(x == respuesta[i]["usuario"] && y == respuesta[i]["contrasena"]){
                        alert("Bienvenido"+" "+respuesta[i]["usuario"])
                        window.location.href = 'home.html';
                        return true;
                    }
                    else
                        contador++;
            
                    if(contador == respuesta.length){
                        alert("El usuario y/o contrseñan no existen/coinciden");
                        return false;
                    }
                }
        }
    });
}