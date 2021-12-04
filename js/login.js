//ACA OBTENEMOS LOS USUARIOS DE UN ARCHIVO JSON LOCAL, CREADO CON NODE.JS DESDE EL ARCHIVO "SERVER.JS"
const USUARIOSJSON = 'js/json/users.json'

function validar(){
    $.getJSON(USUARIOSJSON, function (respuesta, estado) {
        if(estado === "success"){
                //CONSEGUIMOS LOS USUARIOS POR INPUT DEL FORMULARIO
                let x = document.forms["form_login"]["inputuser"].value;
                let y = document.forms["form_login"]["inputpassword"].value;
                let contador = 0;

                //COMPROBAMOS QUE NO SE ENCUENTRE VACIO EL INPUT
                if(x == "" || y == ""){
                    alert("Se deben rellenar todos los espacios");
                    return false;
                }
                //CHEQUEAMOS QUE EL USUARIO Y LA CONTRASENA COINCIDAN CON LOS DEL ARCHIVO JSON
                for(let i = 0; i < respuesta.length; i++){
                    if(x == respuesta[i]["usuario"] && y == respuesta[i]["contrasena"]){
                        alert("Bienvenido"+" "+respuesta[i]["usuario"])
                        //REDIRECCIONAMOS AL SIGUIENTE SITIO
                        window.location.href = 'home.html';
                        return true;
                    }
                    //SI TERMINA EL CICLO FOR, Y NO COINCIDIO CON NINGUN USUARIO, SE DEVUELVE UN ERROR
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