console.log("Sesion JS03");
//----------Declaración de bloque------
{

    /* 
    Las variables declaradas con let y const solo tendrán alcance(scope) dentro del bloque o bloques anidados.
    */
let nombre = "Andrea";
const apellido = "Aguilar";
let edadAndrea = 24 , edadLuis = 25; 
//let edadAndrea=24;
//let edadLuis=25;
/* let numCohorteAndrea = numCohorteLuis= 26;//  /* esto no esta bien nunca se debe utilizar */
let numCohorteAndrea = 26;
let numCohorteLuis= 26;

    {
    /* 
    bloque anidado
    Si una variable local tiene el mismo nombre que una variable global o de bloque superior la variable locar oculta las otras variables para que sea utilizada la variable local.
    */
   let nombre = "Luis";
   const apellido = "SP";
   console.log(`Me llamo ${nombre} ${apellido}`);
   console.log(`Andrea: ${edadAndrea} años`);
   console.log(`Luis: ${edadLuis} años`);
   console.log(`Andrea: ${numCohorteAndrea} cohorte`);
   console.log(`Luis: ${numCohorteLuis} cohorte`);
    }
   console.log(`Me llamo ${nombre} ${apellido}`);
   console.log(`Andrea: ${edadAndrea} años`);
   console.log(`Luis: ${edadLuis} años`);
   console.log(`Andrea: ${numCohorteAndrea} cohorte`);
   console.log(`Luis: ${numCohorteLuis} cohorte`);
   
}
//console.log(`Me llamo ${nombre} ${apellido}`); Marca error porque las variables no estan definidas estan fuera de bloque
/* console.log(`Luis cohorte ${numCohorteLuis} `) // 
console.log(`Sergio cohorte: ${numCohorteAndrea} `); //marcara un error porque esta fuera de bloque y las variables no estan definidas*/

//-----------------Condicional if-else----------------
/* La condicion if ejecuta una sentencia si una condición especificada es
evaluada como verdadera.

Sintaxis:
    if(condicion) sentencia; //solo una sentencia
    
    if(condicion){
        sentencias;
    }
    
    if(condicion) sentencia;
    else sentencia;
    
    if(condicion){
        sentencias;
    }
    else { 
        sentencia;
    }

    if(condicion){
        sentencias;
    } else if(condicion 2){
    } else if(condicion 3){
    } else if(condicion n){
    } else { 
      sentencia;
    }

*/

const temperatura = 100; //"21" nos dira que no existe porque se tiene un estrictamente igual y eso es un string, true lo transforma a 1 y pondria temperatura fria, "veinte" nos diria que no existe
let mensaje;
//if(temperatura === 21) mensaje = `Temperatura ideal ${temperatura}`;
//else mensaje = `La temperatura no es ideal ${temperatura}`;

if (temperatura === 21) 
    mensaje = `Temperatura ideal ${temperatura}`; 
else if( temperatura > 21 && temperatura < 40) //poner temperatura>21 && 40 esta mal porque no se cumple la condicion de temperatura con 40 lo correcto es poner temperatura>21 && temperatura < 40
    mensaje = `Temperatura de ${temperatura} grados es caliente`;
else if( temperatura < 21)  
    mensaje = `Temperatura de ${temperatura} grados es fría`;
else if( temperatura > 40)  
    mensaje = `Temperatura de ${temperatura} grados es super caliente, bendiciones`;
else  
    mensaje = `Temperatura de ${temperatura} grados no existe`;

console.log(mensaje);

//------------------EJERCICIO-----------------------------
/* 
Preguntar por el numero de mes del 1 al 12 (promp o DOM)
de acuerdo al mes desplegar en un alert (o en el DOM) la estacion del año,

mes 12,1,2 = Invierno
mes 3,4,5 = Primavera 
mes 6,7,8 = Verano
mes 9,10,11 = Otoño

usar if-else
*/
/* if(condicion) a++;
else if(condicion2) a+2;
else if(condicion3) a*3;    */

/* const getEstacion = () => {
    const refMes = document.getElementById("mes");
      const numMes = parseInt(refMes.value); //Queremos un numero entero 
      if(numMes >= 1 && numMes <=2 || numMes === 12){
        console.log("Estamos en Invierno");
    } else if (numMes >= 3 && numMes <= 5) {
      console.log("Estamos en Primavera");
    } else if (numMes >= 6 && numMes <= 8) {
      console.log("Estamos en Verano");
    } else if (numMes >= 9 && numMes <= 11) {
      console.log("Estamos en Otoño");
    } else {
      console.log("El número ingresado no es válido. Por favor, ingrese un número entre 1 y 12.");
    }
  } */
  //----------------Switch--------------------
  /* 
  La intruccion Switch evalua una expresión y se compara con el valor de cada instancia en 'case' y se ejecutan las sentencias asociadas a ese 'case' hasta que se encuentre la sentencia 'break'.

  Sintaxis:
        switch (expresión){
            case valor1:
                sentencias;
                break;
            case valor2:
                sentencias;
                break;
            case valorn:
                sentencias;
                break;
            default:
                sentencias;
                break;
        }
  */

const setVelocidadVentilador= ( velocidad) => {
  let msj;
  switch (velocidad){
    case 0:
      msj = "Apagado";
      break;
    case 1:
      msj = "Velocidad baja";
      break;
    case 2:
      msj = "Velocidad media";
      break;
    case 3:
      msj = "Velocidad alta";
      break;
    case 4: //en Js no se puede poner case 4,5 se puede poner case 4: case 5:
    case 5: //es como un or ya que el caso para en break
      msj = "Velocidad super alta";
      break;
    default:
      msj = "el nivel no existe";
      break;
  }
  return msj;
};
console.log(`La velocidad del ventilador esta en ${setVelocidadVentilador(2)}`); //recorre todos los niveles si no hay un break con "4" da default porque la comparacion es estricta
//Refactorizar el ejercicio anterior y usar un switch
    
const getEstacion = () => {
    const refMes = document.getElementById("mes");
    const numMes = parseInt(refMes.value);
  
    switch (numMes) {
      case 1:
      case 2:
      case 12:
        console.log("Estamos en Invierno");
        break;
      case 3:
      case 4:
      case 5:
        console.log("Estamos en Primavera");
        break;
      case 6:
      case 7:
      case 8:
        console.log("Estamos en Verano");
        break;
      case 9:
      case 10:
      case 11:
        console.log("Estamos en Otoño");
        break;
      default:
        console.log("El número ingresado no es válido. Por favor, ingrese un número entre 1 y 12.");
        break;
    }
  }
// ---------------------Operador condicional termario----------
/* 
Es el unico operados de JS que tiene 3 operados. General,emte se usa como opción a la sentencia if-else.

Sintaxis:

condicion ? expersionSiCondicionEsVerdadera : expresionSiCondicionEsFalsa;

*/
const subtotal = 1_000;
const pagoTarjetaCredito = true;
/* let msj;
if(pagoTarjetaCredito) msj= subtotal*1.025;
else msj = subtotal* 1; */

console.log(`La cuenta es de ${pagoTarjetaCredito ? subtotal*1.025 : subtotal*1} pesos` );

const edad = 17;
//se permite el acceso al antro de mala muerte?
console.log(`Acceso ${edad >= 18 ? "Permito" : "Denegado" }`);
//a los de 17 solo con permiso
console.log(`Acceso ${edad >= 18 ? "Permito" : (edad === 17 ? "Solo con permiso" : "denegado") }`); //esto se puede hacer pero no se deberia hacer porque se puede llegar a volver complejo y es poco legible

//----------------------PRACTICA-------------------------
//Refactorizar ejercicio de saludo con un ternario
/* function saludo(numero) {
  if (numero > 1) {
    saludo(numero - 1);
  }
  console.log("Saludo " + numero);
}

saludo(10); */
/* const saludo = numero;
console.log(`Tu saludo es:  ${numero > 1 ?
  saludo(numero - 1) : numero}`) ;

saludo(10); */ //no funciono

//Ejercicio David
const saludar = (numero) => {
  numero === 1 ? console.log("Saludo " + numero) : (saludar(numero - 1), console.log("Saludo " + numero));
};

saludar(10);





  











