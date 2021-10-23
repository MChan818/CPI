const numeros = [8,10,6,2,4,0];
const ascendiente = [];
const descendiente = [];


function ordenar(entrada,salida,valor){
    for(let i = 0; i<entrada.length; i++){
        salida[i] = entrada[i];
    }
    if(valor == 1){
        salida.sort(function(a,b){return a-b})
    }
    else{
        salida.sort(function(a,b){return b-a})
    }
    return salida;
}

//SI EL VALOR ES TRUE, ES EN ORDEN ASCENDENTE.
//SI EL VALOR ES FALSE, ES EN ORDEN DESCENDIENTE.

ordenar(numeros,ascendiente,true);
ordenar(numeros,descendiente,false);

console.log("Ascendicente(true):"+ " " + ascendiente);
console.log("Descendiente(false):"+ " " + descendiente);

