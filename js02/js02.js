console.log("Sesión JS02")

//----------- Función declarada------------
// funtion declaration, function statement
//Una caracteristica es que las funciones declaradas tienen hoisting
/*
Sintaxis
function nombreFuncionCamelCase(parametros){
    instrucciones;
}
*/
/* {const operandoA = 5
    const operandoB = 10
    const resultado = operadorA * operadorB;
    console.log(resultado);
    }

*/
multiplicar (5,10);
multiplicar(8,8);
multiplicar(-4,2);

function multiplicar(num1, num2) {
    const resultado = num1 * num2;

        console.log("El resultado de la multiplicación es: " + resultado);
}
  function divide(dividendo, divisor){
    return dividendo/divisor;
  }
console.log("Divide lo siguiente: " + divide(5,2) );
console.log("Divide lo siguiente: " + divide(5,"2") );
console.log("Divide lo siguiente: " + divide("5","2") );
console.log("Divide lo siguiente: " + divide("5 0","2") ); //Da NaN porque el 5 0 es un Nan y el 2 si esta definido pero todo numero dividido entre un NaN da NaN


//-----Funciones expresadas-------
/* Function Expression
Son declaradas dentro de la asignación de una variable, estas funciones pueden ser anonimas (no tienen nombre), las funciones expresadas no tienen hoisting, por que no se cargan en memoria hasta que se utilice.  */

/* Sintaxis
const nombreVariable = function nombreFuncion(parametros){

}

*/ //no es necesario escribir sumatoria porque ya solo hare referencia al valor sum como en resta
const sum = function sumatoria (a,b) {
    return a + b;
}
const resta = function (a,b){
    return a - b;
}
const potencia = function (a,b){
    return a ** b;
}

console.log("Esta es la suma: " + sum(9,9)); //esta primero se expresa su funcion y luego se busca
console.log("Esta es la resta: "+ resta(90,70));

//-------funciones autoinvocadas-----
//self-invoking functions
//se autoinvocan, se pueden definir con funciones anónimas

(function (){
    console.log("Me autoinvoco en la función");
}) (); //con () se llama a la funcion
//---------Funciones flecha------
//Arrow Functions
//Son funciones similares a las funciones declaradas, pero: No requieren la palabra function 

const areaRectangulo = (base,altura)=> base * altura;

        console.log("El resultado del area del rectangulo con 7x9: " + areaRectangulo(7,9)+ "cm");
//-------Parametros default-------
const areaTriangulo = (base=1, altura=1)=> base * altura / 2;
console.log("El resultado del area del triangulo : " + areaTriangulo(5,10)+ "cm");
/* console.log("El resultado del area del triangulo : " + areaTriangulo(8)+ "cm"); Da NaN porque la altura es undefined  ya inicializandolo con =1 a la base y a la altura ya nos podria dar un resultado*/

//Los comentarios de funcion son con /**
/**
 * Este comentario es la documentacion de la función
 * @param {*} base esto es la descripcion de base
 * @param {*} altura esto es la descripcion de altura
 * @returns área del rectángulo
 */ 

