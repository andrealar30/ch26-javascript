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
console.log("El resultado del area del triangulo : " + areaTriangulo(8)+ "cm"); /*Da NaN porque la altura es undefined  ya inicializandolo con =1 a la base y a la altura ya nos podria dar un resultado*/

//Los comentarios de funcion son con /**
/**
 * Este comentario es la documentacion de la función
 * @param {*} base esto es la descripcion de base
 * @param {*} altura esto es la descripcion de altura
 * @returns área del rectángulo
 */ 

//----- Parámetro rest--------
//Rest parameters sintaxis: ...nombreParametro y debe estar al final de todos los parametros
//Nos permite representar una serie de valores indefinidos en los argumentos
//Estos se presentan como un array

function sumatoriaDeVariosNumeros(a,b, ...restoDeDatos){
    let suma;
    suma = a + b;

    for (let index = 0; index < restoDeDatos.length; index++) {
        suma += restoDeDatos[index];//suma = suma + restoDeDatos[index]
       }

    return suma;
}
console.log("Sumatoria de varios numeros: " + sumatoriaDeVariosNumeros(5,6));
console.log("Sumatoria de varios numeros: " + sumatoriaDeVariosNumeros(5,6,9,10));//sale 11 al mandarle más parametros no se consideran pero js no marca error. cuando ya solocamos el fot y ...restoDeDatos ya funciona y nos sale la suma que es 50
console.log("Sumatoria de varios numeros: " + sumatoriaDeVariosNumeros(5,6,9,10,20,50));//100
//------Funciones de Callback----------------
//funcion que se pasa a otra funcion como argumento, para luego invocarse
//para completar algún tipo de rutina o acción.
//3 funciones, una que imprima en consola, alert, DOM H1
//funcion que imprime un mensaje en consola
/* function imprimirEnConsola(mensaje) {
    console.log(mensaje);
  }
//funcion que muestra una alerta en la pantalla
function muestraAlerta(mensaje){ 
alert(mensaje);
}
//Funcion que agrega un encabezado h1 al DOM
function addH1ToDOM(mensaje) {
    const h1 = document.createElement("h1");
    h1.innerText = mensaje;
    document.body.appendChild(h1);
  }

  imprimirEnConsola("Soy un pato");
muestraAlerta("¡Cuak cuak!");
addH1ToDOM("Hola, mundo!");

  function getNamePrintToConsole( ){
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un gran día`;
    imprimirEnConsola(text);
}

function getNamePrintToDOM( ){
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un gran día`;
    addH1ToDOM(text);
}
getNamePrintToConsole();
getNamePrintToDOM();
//------------
function getNameAndPrint( opcion   ){ // Esta es la buena
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un gran día`;
    if (opcion === 1)
      imprimirEnConsola(text);
    else if(opcion===2)
      addH1ToDOM(text);
    else
      muestraAlerta(text);
}
getNameAndPrint(imprimirEnConsola);
getNameAndPrint(muestraAlerta);
getNameAndPrint(addH1ToDOM);
// getNamePrintToConsole();
// getNamePrintToDOM(); */
/*
    Ejercicio 2
    Escribe una función que tome un arreglo de números,
    duplique el valor de cada número del arreglo,
    e imprima el nuevo arreglo actualizado.
    [5, 10, 15, 20, 25] -> [10, 20, 30, 40, 50]
*/

function double(arr) {
    const doubleNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      const duplicate = arr[i] * 2;
      doubleNumbers.push(duplicate);
    }
   return doubleNumbers;
}
//Funcion que nos sirve de callback
//const duplicate = (number)=> number * 2;
function doubleWithMap(array){
    return array.map(number=> number * 2);
}

const numbers = [5, 10, 15, 20, 25]; 
//console.log(double(numbers));
console.log(numbers.map(number=>number*2));
console.log(numbers);

/*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.
salida:Cursos en comun
*/

const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];

function cursosEnComun (student1Courses,student2Courses) {
    const courses = [];
    for (let i=0; i < student1Courses.length; i++) {
     for (let j=0; j < student2Courses.length; j++) {
      if (student1Courses[i] == student2Courses[j]){
        courses.push( student1Courses[i] );
      }
     }
    }
    return `Cursos en común: ${courses}`; 
  }
  //usar filter y usar includes
/* const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];
  function cursosEnComunV2(student1Courses, student2Courses) {
    const courses = student1Courses.filter(course => student2Courses.includes(course));
    return `Cursos en común: ${courses}`;
  }
  //filter
  //es un método de copia que no altera y que devuelve una copia superficial que contiene los mismos elementos que los de la matriz original (con algunos filtrados).los que cumplan con true me los regresa los que sean false no me los regresa
  //include
  //para ver si una cadena (string) existe dentro de otra. 
console.log(cursosEnComun( student1Courses, student2Courses ));
console.log("Cursos en Comun:" + cursosEnComunV2( student1Courses, student2Courses )); */
//----------- Ahora con 3 cursos-----------------------------
const student3Courses = ["Music"];

function getCommonCoursesWithFilter(student1Courses,student2Courses) {
    return student1Courses.filter(course => student2Courses.includes(course));
}

const commonCourses = getCommonCoursesWithFilter(student1Courses, student2Courses);
const commonCoursesWithStudent3 = getCommonCoursesWithFilter( commonCourses, student3Courses)
console.log("Common courses:", commonCoursesWithStudent3.join(", "));

//--------------Contar la cantidad de caracteres de una frase
//pepe pecas pica papas con un pico, con un pico pica papas Pepe Pecas.
// pepe pecas pica papas con un pico y una pala
// la cantidad de letras 'p': 8
// resolverlo usando arrow function

/* const frase = "pepe pecas pica papas con un pico y una pala";
let cantidadDeLetrasP = 0;

for (let i = 0; i < frase.length; i++) {
  if (frase.charAt(i) === "p" || frase.charAt(i) === "P") {
    cantidadDeLetrasP++;
  }
}
//charAt es un método en JavaScript que se usa para recuperar el carácter en un índice específico de una cadena. Toma un parámetro, que es el índice del carácter a recuperar.
console.log("Cantidad de letras p: " + cantidadDeLetrasP); */
phrase = 'pepe pecas pica papas con un pico y una pala'

const countChar = (p, phrase) => phrase.split("").filter(c => c == p).length;

console.log("Cantidad de letras 'p':", countChar('p', phrase))

//-----------Funciones Recursivas------------------
//Es una tecnica de programación donde la funcion se llama así misma
//Se debe tener precaución de no entrar a un bucle infinito
/* 
function funcionRecursiva(valor){
    if(condicionDeParo){

    }
    else{
        //Llamada recursiva
    }
}
 */
function factorialConCicloFor(numero) {
    let factorial = 1;
    for (let i = 1; i<= numero; i++) {
      factorial *= i; //factorial=factorial*i;
    }
    return factorial;
  }
function factorialRecursivo(numero){
    if(numero === 1){
        return 1;
    }
    else{
        return numero * factorialRecursivo(numero - 1);
    }
}
  console.log("Factorial de 5: " + factorialConCicloFor(5));
  console.log("Factorial de 5: " + factorialRecursivo(5));
  //Refactorizando
  function factorialRecursivo(numero){
    if(numero === 1)
        return 1;
        return numero * factorialRecursivo(numero - 1);
    }
  console.log("Factorial de 5: " + factorialConCicloFor(5));
  console.log("Factorial de 5: " + factorialRecursivo(5));
  //---------Ejercicio----------
  //Una función recursiva que muestre en consola
  /* 
  Saludo 1
  Saludo 2
  .
  .
  .
  Saludo(10);
   */
  const saludar = ( numero ) => {
    if( numero === 1){
        console.log("Saludo " + numero);
    }else{
        saludar(numero - 1)
        console.log("Saludo " + numero);
    };
};

saludar(10);
//------------Ejercicio FATIMA-----------
function saludo(numero) {
    if (numero > 1) {
      saludo(numero - 1);
    }
    console.log("Saludo " + numero);
  }
  
  saludo(10);
  