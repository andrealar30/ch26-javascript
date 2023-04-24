console.log("Sesión JS01");

//Son 7 datos primitivos
//string:"Hola"

console.log("Tipo de dato String: ", "Hola");

//Number:12,-45,367.12, +Infinity, -Infinity, NaN
//Los numericos usan 64 bits para almacenar pero solo se usan 53 bits para representar el número.

console.log("Tipo de dato Number:", 12, -45, 367.12, 45/0, -56/0, 56*"hola");
console.log("valos máximo: " , Number.MAX_VALUE);

//Number se escribe con mayuscula por lo que es un atributo de clase que nos dara el maximo valor de los numericos
console.log("Valos seguro: ", Number.MAX_SAFE_INTEGER);
//El valos maximo seguro es el mejor porque te habla de precisión.

//BigInt
// sirven para representar valores numericos enteros, de los que el tipo number no puede representar o no es seguro.

console.log("MAX_SAFE_INTEGER + 1: ", Number.MAX_SAFE_INTEGER + 1);//Al final me aparece 992 
console.log("MAX_SAFE_INTEGER + 1: ", Number.MAX_SAFE_INTEGER + 2); //Al final me aparece 992 cuando deberia ser 993 porque esta superando el valor seguro
let myBigInt= 9007199254740991n; //Se agrega la letra n al final para saber que este es un dato bigInt 
console.log("Valos de dato BigInt: ", myBigInt + 1n);//Un tipo number y un bigInt no se pueden mezclar y solo se mezclan cuando les ponemos la n al 1 y al 2
console.log("MAX_SAFE_INTEGER+ 1n", myBigInt + 2n);

//Boolean tenemos solo dos estados true or false

console.log("Tipo de dato boolean:", true);
console.log("Tipo de dato boolean:",false);

//Undefined
//Un dato que es declarado, pero no definido en el tipo
let myVar; //solo se declara
console.log("Tipo de dato undefined: ", myVar);

//null
//Intensionalmente se borra el tipo de dato
let myVarNull; //Solo se declara
console.log("Tipo de dato myVarNull: ", typeof(myVarNull) );//undefined
myVarNull = "Saludos Merlí"; //se asigna un dato string
console.log("Tipo de dato myVarNull: ", typeof(myVarNull) );

myVarNull = null; //no sale null, sale object porque borra todos los bits y pareciera ser un tipo objeto pero es un error ya que si es null pero el typeof siempre nos dira que es object
console.log("Tipo de dato myVarNull: ", typeof(myVarNull) );

//symbol
//Crea propiedades privadas en los objetos
//------------------------------------------------
//Tipos de datos object

//Object:
//Los objetos tienen metodos, su valor pasa por referencia y son mutables
//para los objetos se usan llaves y es clave:valor y se separan por comas
const misDatos = {
    nombre:"Andrea",
    apellido:"Aguilar",
    edad: 24,
    isBellaka: false,
    musicaPreferidaPorGenero:{
        rock:"Hombres G",
        pop:"KanyGarcía"
    }, //dentro de un objeto tengo este otro objeto y el primer objeto usa el igual porque le estoy asignando todo un objeto pero dentro de los objetos van los dos puntos  y como el objeto musicaPreferidaPorGenero esta dentrol del objeto misDatos por esa razon lleva dos puntos
    nombreCompleto: function fullName(){
        //return misDatos.nombre + " " + misDatos.apellido + ", gatita que le gusta el mambo";//
        return this.nombre + " " + this.apellido + ", gatita que le gusta el mambo";
    } //En vez de poner mis datos de perfil puedo utilizar this y hago referencia al objeto que se esta invocando
}
const misDatosDeInstagram = 
 //clave valor
 {
    nombre:"Rilet",
    apellido:"MiauMiau",
    edad: null,
    isBellaka: true,
    musicaPreferidaPorGenero:{
        rock:"Hombres G",
        pop:"KanyGarcía"
    }, //dentro de un objeto tengo este otro objeto y el primer objeto usa el igual porque le estoy asignando todo un objeto pero dentro de los objetos van los dos puntos  y como el objeto musicaPreferidaPorGenero esta dentrol del objeto misDatos por esa razon lleva dos puntos
    nombreCompleto: function fullName(){
        //return misDatos.nombre + " " + misDatos.apellido + ", gatita que le gusta el mambo";//
        return this.nombre + " " + this.apellido + ", gatita que le gusta el mambo";
    } //En vez de poner mis datos de perfil puedo utilizar this y hago referencia al objeto que se esta invocando
}
console.log("Datos completos: ", misDatos);
console.log("Nombre", misDatos.nombre);
console.log("Música de fin de semana",misDatos.musicaPreferidaPorGenero.pop);
console.log("Nombre completo: ", misDatos.nombreCompleto()); //nombre completo es un metodo

console.log("Nombre completo: ", misDatosDeInstagram.nombreCompleto()); //nombre completo es un metodo

//array
//almacena diferentes tipos de datos, su primer elemento es el indice 0

const cancionesPP = [
    "Soy el belicon",
    "El azul",
    "El tsurito",
    "amg",
    {
        2020: 5,
        2021: 30,
        2022:56,
        total: 91
    }
];

console.log("Canción con color: ", cancionesPP[1]);
//en el caso de los objetos podemos acceder a traves del punto o de los corchetes
console.log("Canciones totales", cancionesPP[4]["total"]);
console.log("Canciones totales", cancionesPP[4].total);
//console.log("Canciones echas en el año 2021", cancionesPP[4].2021); //Marca error porque es un numero y la consola no lo identifica
console.log("Canciones echas en el año 2021", cancionesPP[4]["2021"]);
//console.log("Canciones echas en el año 2021", cancionesPP[4][2021]); //Confunde porque puede pensarse que es un arreglo dentro de un arreglo cuando no es el caso por lo que si debemos espeficicar que es clase con las comillas
console.log("Numero de elementos: ", cancionesPP.length);
console.log("Contiene la cancion AMG", cancionesPP.indexOf("amg")>-1); //index nos entrega el indice de donde esta mientras que al poner la intruccion >-1 nos dice si es cierto que esta o no

//--------------------------------
//Conversion de datos
const myNumber = 420; //minutos en la sesion JS 01
console.log("Numero de minutos de la sesión: " + myNumber); //Esto es un string
//toString
const myNumberTxt = String(myNumber);
console.log("Numero de minutos de la sesión: " + myNumber); //Esto es un string

//toNumber

const myString = "420";
//const sumatoria = 80 + myString;
//console.log("Valor de sumatoria" + sumatoria); //80420 no lo suma porque uno es un string
//Convertimos en string
const sumatoria = 80 + Number(myString);
console.log("Valor de sumatoria" + sumatoria);

//toParseInt
const myStringInteger = "420.2020";
const sumatoriaEntera = 80 + parseInt(myStringInteger);
console.log("valor de sumatoria entera: " + sumatoriaEntera);//500

//para boolean
const isBelicoso = "false"; 
console.log(typeof isBelicoso); //cualquier string al ser convertido a booleano se convierte en string y es true si tiene un espacio
console.log(Boolean(isBelicoso) );

if (isBelicoso === "false")
    console.log("Denle su belikin");
else
    console.log("Abra paso a la barredora");

    //boolean
//para que sea false, debe ser un "" (string vacio), 0, null, undefined. con todo lo demás obtendremos true
//number
//en el caso de los numbers es en arreglos []=0, [30]=30,[3,1]=NaN, false=0,true=1
//String
//[]="", [1,2]= "1,2", function (){}, {}= {object, object} un objeto convertido a string nos daria un objeto objeto.
