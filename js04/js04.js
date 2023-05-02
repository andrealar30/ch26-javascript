console.log("Sesion JS04 Arreglos y ciclos");
//Declarar un array
const nombreCh26 = ["Sofi", "Alejandro","Ixchel","Said"];
//usando el constructor de arreglos
const apellidosCh26 = new Array("Montellano", "Torres","Vazquez");
const numCajonesEstacionamiento = new Array(4); //[, , ,]
const numCohortesActivas = new Array(26,27,28,29); //[26,27,28,29]

console.log("Apellido de Sergio " + apellidosCh26[1]);

//Agregar un nuevo apellido al final del arreglo apellidos
apellidosCh26.push("Aguilar");
console.log(apellidosCh26);
//Matrices (arreglos de 2 dimensiones)
//Arrays anidados
//[ [] , [] , [] ]
const personasEnCohortes = [ 
    ["Arath"     , "Jose"  , "Karen"     , "Sofi"            ] , //ch26
    ["Manuel"    , "María" , "Francisco" , "Pablo" , "Pepe"  ] , //ch27
    ["Doris"     ,"Brendan", "Lucas"     , "Maria"           ]   //ch28
 ];
console.log("Personas ch27: " + personasEnCohortes[1] );
//Accediendo a Francisco
//["Manuel","María","Francisco","Pablo","Pepe"];
const temporalCh27 = personasEnCohortes[1];
const paco = temporalCh27[2];
console.log("Extraer en pasos " + paco );//Francisco 
console.log("Francisco en ch27: " + personasEnCohortes[1][2] ); //Francisco
//nemotecnia "feliz cumpleaños" filas - columnas
console.log("Lucas en ch28: " + personasEnCohortes[2][2] ); //Lucas
console.log("Karen en ch26: " + personasEnCohortes[0][2] ); //Karen
personasEnCohortes[1][3] = "Juan";
console.log("Personas en ch27: " + personasEnCohortes[1]);//Se cambia a Pablo por Juan

//myArray3D = [ [ [],[],[] ], [[],[],[]] ];
//Iterar un arreglo de 2 dimensiones
/* for (let fila=0 ; fila<personasEnCohortes.length; fila++){
    console.log(`Indice ${fila} : ${personasEnCohortes[fila]}`)
    for (let columna = 0; columna < personasEnCohortes[fila].length; columna++) {
        console.log(`Nombre ${personasEnCohortes[fila][columna] }`)
        
    }
} */ //CUIDADO AQUI
//Usando forEach
personasEnCohortes.forEach(fila => fila.forEach (columna => console.log(columna))); //se itera cada elemento y nos itera a cada uno de los elementos
//For  of
//Ejecuta sentencias por cada elemento de un objeto iterable(arrays, strings y objetos)
const myName = "Andrea";
for (let char of myName){
    console.log(char);
}

for (let fila of personasEnCohortes){
    for (let columna of fila){
        console.log(columna);
    }
}

//-------------------Consideraciones para el ciclo for---------------
//No es necesario indicar el inicio, la comparacion y la expresion final 
/* 
Sintaxis ciclo for:
    for( inicio; comparación; expresiónFnal ){
        sentencias;
    }
*/
//Break: Rompe con la iteración en curso y sale del ciclo
let nInteraccion = 0;
for(/* inicio */; /* comparacion */; /* ExpFinal */){
    console.log(nInteraccion);
    if (nInteraccion === 5) break;
    nInteraccion++;
}
//--------------------Ejercicio-----------------------------
//Iterar y mostrar a las personas en personasEnCohorte y detener cuando se encuentre a Maria.
//Dejar de iterar
personas: //Se usa un label para indicar en el brak hacia que ciclo rompera
for(let fila of personasEnCohortes){
    for(let columna of fila){
        console.log(columna);
        if(columna === "María") break personas; //se indica el label que rompe
    }
   // if(columna == "María") break; //Si no se usa el label, se tiene que realizar esto
}
//Continue
/* Termina la ejecución de la sentencia en la iteración actual y continua la ejecución del ciclo con la proxima iteración (o en el label que se indique) */
console.log("====uso de continue");
//No imprimir a María
personas:
for(let fila of personasEnCohortes){
    for(let columna of fila){
        if (columna === "María" || columna === "Maria") continue; 
        const concatenacion = "persona " + columna;
        console.log(concatenacion);
    }
}
/* personas:
for(let fila of personasEnCohortes){
    for(let columna of fila){
        if (columna != "María" && columna !== "Maria"){
        const concatenacion = "persona " + columna;
        console.log(concatenacion);
        }
    }
} */

//-----------------------Ciclo While-------------------------
/* 
Crea un bucle que ejecuta una sentencia mientras la condición especificada sea verdadera.
Sintaxis:
while(condicion)
    sentencias;
*/

/* let counter = 0;
while ( confirm ("¿Quieres continuar?") ) {
    console.log(`Has continuado ${++counter} ${counter>1? "veces":"vez"} `);
} */
 //++counter primero lo incrementa y luego me entrega el valor y con counter++ primero me da el valor y luego lo incrementa

 const numbers = [9,5,6,7]
 let index = 0;
while (index < numbers.length) {
  console.log(numbers[index]);
  index++;
}

//-----------------Práctica----------------
/* 
TAREA
*/
//Ciclo do while
/* 
Crea un bucle que ejecuta una sentencia hasta que la condicion de comprobación se evalue como falso.
La condición se evalua después de ejecutar la sentencia, por lo que la sentencia se ejecuta por lo menos una vez.

Sintaxis:

do{
    sentencias;
    }while(comprobacion);
 */

/* let iteration = 0;
do{
    iteration++;
    console.log("N. iteración do while: " + iteration);
}
while(confirm("deseas continuas?")); //confirm hace que se despliegue una ventana en el navegado */

let valor= -2;
while( valor < 5) {
    console.log("while" + valor);
    valor ++; //imprime 7 veces si ponemos valor=-2 porque cuenta -2,-1,0, 1,2,3,4 y si pongo valor= 10 no me imprime nada porque quiero que sea menor y 10 no es menor
}

 valor = 5;
 do { 
    console.log("Do while" + valor);
    valor ++; 
} while( valor < 5) //se imprime 1 vez porque llega despues al while

valor = 4;
 do { 
    console.log("Do while" + valor);
    valor ++; 
} while( valor < 5) //se imprime 1 vez porque en valor se le suma uno y despues ya hace la comparacion con el while y ahi ya no se cumple por 5 no es mayor a 5 
/* 
FIFO: primero en entrar, primero en salir first input, first output
LIFO: ultimo en entrar, primero en salir last input, first output
*/
const alimentos = [];

//Usar FIFO:
alimentos.push("Manzanas del lunes");
alimentos.push("Manzanas del miércoles");
console.log(alimentos);
//Sacar las manzanas
console.log( "Sacando las manzanas antiguas: " + alimentos.shift() );
console.log(alimentos);
console.log( "Sacando las manzanas antiguas: " + alimentos.shift() );
console.log(alimentos);

//Usar LIFO:
const productos = [];
//Temporada navideña
productos.push("Desarmadores");
productos.push("Luces de colores");
console.log(productos);
console.log( "Sacando el productor reciente" + productos.pop() );
console.log(productos);
