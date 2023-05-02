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

console.log(true == "true");