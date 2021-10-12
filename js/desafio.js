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
    if(valor == -1){
        salida.sort(function(a,b){return b-a})
    }
    return salida;
}

//SI EL VALOR ES 1, ES EN ORDEN ASCENDENTE.
//SI EL VALOR ES -1, ES EN ORDEN DESCENDIENTE.

ordenar(numeros,ascendiente,1);
ordenar(numeros,descendiente,-1);

console.log("Ascendicente(1):"+ " " + ascendiente);
console.log("Descendiente(-1):"+ " " + descendiente);

