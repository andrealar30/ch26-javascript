console.log("Sesion js05 operadores");
//------------Operadores aritmeticos------------------
//Adicion + 
//Multiplicacion *
//Substraccion -
//Division /
//Exponencial **
//Resto %
//ejemplo

let dinero = 20 + 10; //30
console.log(dinero);

//------------------------operadores de asignacion---------
//asigna un valor a su operador izquierdo basandose en el valor de
//su operando derecho
//asignacion =
//asignacion de adicion +=
dinero += 15; //dinero = dinero +15;
//Multiplicacion *
//Substraccion -
//Division /
//Exponencial **
//Resto %
12 + 7 + 12 + 4 + 1;
let exponencial = 2 ** 3 ** 2; // se revuelve de derecha a izquiera se toma 
//como 3 ** 2 = 2 ** 9 
console.log(exponencial);
//------------------Operadores unarios
// un operador unario realiza una operacion en un solo operando .
//Negacion
dinero = -3; // -=3 -> dinero = dinero -3
console.log(dinero);
//Conversion a numerico + 
dinero = +dinero; //sigue siendo -3
 dinero = +"200"; //200 numerico 
 console.log(dinero);
//typeof:
console.log(typeof(dinero));
//Operador logico not !
let valorBooleano = !true;
console.log ( valorBooleano );

//Operadores de incremento y decremento en una unidad
//Operador de pre-incremento y pre-decremento 
//pre-incremento ++valor
//pre-decremento --valor

//Operador de post-incremento y post-decremento 
//post-incremento valor++
//post-decremento valor--

let numero = 10;
numero ++ ; //post incremento 11
++ numero; //12
console.log(numero);//12

let nuevoValor = numero ++;
/* 
    let nuevoValor = numero; //primero se entrega el valor que es 12 y despues se incrementa
    numero = numero + 1;
*/
console.log("nuevo valor", nuevoValor);//12
console.log("numero", numero);//13

let nuevoDato = ++ numero;
/* 
numero = numero + 1;
//primero se incrementa el 13 a 14 y en ese momento se entrega el numero 
nuevoDato = numero;

*/
console.log("nuevoDato", nuevoDato); //14
console.log("numero", numero); //14

let x = 3;
let y = ++x;
console.log(`x: ${x} y: ${y}`); // 4,4

console.log(`x: ${x++} y: ${++y}`); // 4,5
console.log(`x: ${x} y: ${y}`); // 5,5

//--------Operadores logicos AND && Y OR ||---------------
const a = true;
const b = false;
const c = true;
console.log(a||b && c); //true
//el and tiene mayor precedencia b&&c es true y true or true es true
//Cuando los operadores lógicos and y or actuan sobre operandos diferentes a booleanos.

//Op1 && Op 2 si Op1 es verdadero se realiza el resultado de op 2

console.log( a && "holi crayoli");
console.log( b && "holi crayoli");
console.log( NaN && "el valor es un numero que se puede procesar");//NaN
console.log( "false" && "el valor es false");//el valor es false porque el primero "false" es un string y nos da un valor verdadero y como es verdadero entonces nos entrega el siguiente dato
console.log( "" && "no hay dato"); //"" es falso porque no hay dato y por lo tanto se imprime pero no nos da nada

//OP1||OP2 su OP1 es verdadero, se realiza el resultado de OP1  en caso de que OP1 sea falso se realiza OP 2
console.log( a || "holi crayoli"); //true
console.log( b || "holi crayoli"); //es falso y sale holi crayoli
console.log( NaN || "el valor es un numero que se puede procesar");//el valor es un numero que se puede procesar
console.log( "false" || "el valor es false"); //false
console.log( "" || "no hay dato");//no hay dato

const noDefinido = true;
console.log(noDefinido || theBigBang); //noDefinido

//Quiero imprimir "Estas autorizado" si la variable isOnline y isActive son true
const isOnline = true;
const isActive = true;
if (isOnline && isActive) {
    console.log("Estás autorizado");
  }
//con operador ternario
  isOnline && isActive ? console.log("Estás autorizado") : console.log("No estas autorizado");

//con operador de corto circuito
console.log (isOnline && isActive && "Estás autorizado");
//               T          T
//                     T && T entonces "Estás autorizado"


//Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (true) o falsa (false). Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. Las cadenas se comparan según el orden lexicográfico estándar, utilizando valores Unicode. En la mayoría de los casos, si los dos operandos no son del mismo tipo, JavaScript intenta convertirlos a un tipo apropiado para la comparación. Este comportamiento generalmente resulta en comparar los operandos numéricamente.

console.log(true == "true"); //la conversion de true a numerico es 1 y "true" convertido a numerico da NaN por eso la respuesta es false y aqui es porque se esta comparando un string con un boleano y tenemos un true boleano y un "true" string y es cuando "true" se convierte en NaN

console.log (23 < "40"); //true porque al convertir "40" si nos da un numero 40 y 23 si es menor a 40 por lo que si es true

console.log("b" < "A"); //en unicode las minusculas valen más que las mayusculas por lo que b=98 y es mas grande que A mayuscula porque A= 65 por lo que nos daria un false

console.log("Hola"<"HOLA"); //Hola es mayor que "HOLA" porque las minusculas valen más que las mayusculas por lo que "Hola"> "HOLA" por lo que es false

console.log("Hola"< "123"); //Es false porque "Hola" en unicode suma los numeros de cada palabra y nos da un mayor valor y el valor del unicode de numeros es menor por lo que "Hola" es mayor que "123", "H"=72 y 1=49

console.log("Hola" < "KeHace" + 1000);//true porque "KeHace" + 1000 es "KeHace1000" ya que se junta por la concatenación y primero lo suma por la presedencia de operadores ya que + tiene mayos precedencia que < menor que por lo que "KeHace1000" es más grande que "Hola" por el unicode y va comparando cada letra 
console.log( "23" == 23); //true porque "23" lo convierte a numerico y 23 es numerico y como no debe ser estrictamente igual entonces es true

//----------------------Comparación estricta------------

/* 
=== esctrictamente igual debe ser igual en el valor y el tipo
!== estrictamente diferente, debe ser diferente en valor y el tipo
*/

console.log("23" === 23); //false porque uno es string y el otro es numerico
console.log("true" === true); //false porque uno es "true" y es NaN y el otro es booleano
console.log("45" !== 45); //true porque si son diferentes uno es string y el otro es numerico
console.log("false" !== false); //true porque si son diferentes uno es NaN y el otro es booleano

//Operador de asignación
const myNumber = 34;

//Desestructuración(Destructuring)
/* 
Es ima expresión en JS que hace posible extraer datos de arreglos o objetos y nos ayuda a realizar asignaciones más complejas.
*/

let dataA = 10;
let dataB = 20;
console.log(`a: ${dataA} , b:${dataB} `);
//Quiero intercambiar los datos
/* 
let temporal;
temporal = dataA;
dataA = dataB;
temporal = dataB; 
*/
//aplicando desestructuracion
 [ dataA, dataB ] = [ dataB , dataA];
console.log(`a: ${dataA} , b:${dataB} `);

const calificaciones = [50, 80, 100, 30, 60, 99 ];
// dataA = calificaciones[0]; // 50
// dataB = calificaciones[1]; // 80
let resto;
[ dataA, , , dataB, ...resto  ] = calificaciones; 
console.log(`a: ${dataA} , b:${dataB} `);
console.log(resto);

const primerAnio ={
  dataA: "43 alumnos",
  dataB: "50 alumnos",
  dataC: "20 alumnos"
};
( {dataA, dataB } = primerAnio);

console.log(`a: ${dataA} , b:${dataB} `);


const auto = {
    model: "Chevrolet",
    year: 2023,
    color : "red",
    motor: "2.0"
  }
console.log("Modelo " + auto.model);  //auto["model"]

/* const{model, color : colorAuto = "Pistache"} = auto; //ahí se le  está asignando el valor model del objeto auto a la constante model
console.log("Modelo " + model + " color: " + color + " color no definido " + colorAuto); //si pones colorAuto no sirve porque no se ha definido que es 
 */

//------------Asignando nuevo nombre al atributo
const{model, color : colorAuto} = auto; //se le pasa el atributo color a colorAuto
console.log("Modelo " + model + " color: " + colorAuto); 

// ------------------------------EJERCICIO-------------------------
/* 
Hacer una funcion que realice la division de 2 numeros y me entregue (return) en entero el cociente y residuo
*/

function division(dividendo, divisor) { //partes de la division
    const cociente = Math.floor(dividendo/divisor); //redondeamos los numeros
    const residuo = Math.floor(dividendo % divisor); //para obtener el residuo 
    return {cociente, residuo};
}
    const {cociente, residuo} = division (9,5);
console.log(`El resultado de 9/5, cociente: ${cociente},  residuo: ${residuo}`);

/* //Ejercicio Alejandro
const division = (numA, numB) => {
    const results = {
        "cociente": 0,
        "residuo": 0
    }
 
    results.cociente = parseInt(numA/numB);
    results.residuo = numA%numB;
    return results;
}
//Ejercicio goyo
function divison(a, b){
    const cociente = parseInt(a / b);
    const residuo = a % b;
    const valor = {resultado : cociente, residuo : residuo};
    return valor;
}
const valor = divison(9,5);
console.log(`El resultado de 9/5, cociente: ${ valor.resultado }, residuo ${ valor.residuo } `); */

