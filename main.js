function tabla(numero){
    for(i=0; i<= numero; i++){
        console.log(`${numero} * ${i} = ${numero*i}`)
    }
}

function tablaD(tabla= Number, limite = Number){
    for(ii=0; ii<= limite; ii++){
        console.log(`${tabla} * ${i} = ${tabla*i}`)
    }
}

function tablaT(tabla= Number, limite = 10){
    for(jj=0; jj<= limite; jj++){
        console.log(`${tabla} * ${i} = ${tabla*i}`)
    }
}
const resultado = function operacionMat(op= String, valorA=Number, valorB=Number){
    switch(op){
        case '+':
            return valorA+valorB;
        default:
            return 0;
    }
};

tabla(parseInt(prompt('Ingrese en numero: ')))
console.log('*************')
tablaD(3,10)
console.log('*************')
tablaT(12)
console.log('*************')
console.log(operacionMat('+', 3, 4));
console.log(typeof(operacionMat('+', 3, 4)));
console.log('*************')
console.log(resultado('+', 13, 4))