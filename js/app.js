
// Calcula pago total SOLO PARA EL DESAFIO, LUEGO LO VOY A HACER CON UN FORMULARIO

// function calcular_total(n, cuotas){
//     if(cuotas == 0)
//         return 1;
//     if(n < 5)
//         return 2;

//     let resultado = (n*500)/cuotas;

//     return resultado;
// }

// var valor_a = prompt("Ingrese la cantidad de miembros en su equipo");
// var valor_b = prompt("Ingrese la cantidad de cuotas con la cual desea pagar");

// if(calcular_total(valor_a,valor_b) === 1){
//     alert("Las cuotas deben ser mayor a 1");
// }
// if(calcular_total(valor_a,valor_b) === 2){
//     alert("El equipo debe tener al menos 5 miembros");
// }
// else
//     alert("El total es de: " + calcular_total(valor_a,valor_b) + " " + "en cuotas de " + valor_b);

// -----------------------------------------------
document.getElementById("defaultOpen").click();

function menu_toggle(evt, seccion){

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(seccion).style.display = "block";
    evt.currentTarget.className += " active";

}


