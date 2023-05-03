console.log("Sesión js06 operadores");

//funcion definida
function encontrarElementoByIdFuncion01(/* parametros */){
    /* instrucciones */
    return null;
}

//funcion expresada
const encontrarElementByIdFuncion02 = function (/* parametros */) {
    return null;
};

const encontrarElementoByIdFuncion03 = (/* parametros */) => {
    return 3*4
};
const encontrarElementByIdFuncion04 = () => 3*4; //se pueden encontrar en parentesis y sin parentesis
const encontrarElementByIdFuncion05 = variableParametro => 3*4;

const encontrarElementoById = (nombreDesarrollador) =>{
    const tituloRef = document.getElementById("titulo");
    tituloRef.innerHTML = tituloRef.innerHTML + nombreDesarrollador;
}
encontrarElementoById (", Andrea");

const changeSubtitleById = ( newTxt ) => {
    const subtitleRef = document.getElementById("subtitulo");
    subtitleRef.innerHTML = `${subtitleRef.innerText} , <em> ${newTxt} </em>`
}
changeSubtitleById("Viernes de cholos");

// -------- Encontrar elementos por su tag-------
//getElemntByTagName()

const changeEmphasis = (newTxt, url) => {
         const emphasisRef = document.getElementsByTagName("em");
            // console.log(emphasisRef)
            for (element of emphasisRef) {
            console.log(element);
            element.innerHTML = `<a href="${url}" target="_blank">${newTxt}</a>`;
            }
        };
        
        changeEmphasis("Viernes friki","https://jkanime.net/");
        changeEmphasis("Viernes de cholo","https://www.youtube.com/watch?v=3jmDkZL3HZk");

//---------------selector universal-------------------
//querySelector

const findElementsByQuerySelector = () =>{
    const refElements = document.querySelector /* ("p") */ /* ("#intro") *//*  (".intro")*/ ("p em"); //entre comillas la p para decir que estamos buscando un paragraph
    refElements.innerHTML = "La Ch 26 es bien <strong> chida </strong> y les gusta el 11:11";

}
findElementsByQuerySelector();

// -------------- Crear nuevo elemento ----------------------------
// appendChild

const newElement = () => {
    const newElementRef = document.createElement("p"); // <p> </p>
    
    newElementRef.innerHTML = ` La Ch 26 le gusta:
    <ul>
        <li>El pan de muerto</li>
        <li>El chismesito</li>
        <li>El pozole</li>
        <li>Pizza</li>
        <li>El pulque</li>  
    </ul>
    `
    const articleRef = document.querySelector("article");
    articleRef.appendChild( newElementRef  ); // Se agrega el nuevo elemento
    // Clonar el nodo anterior
    // const nodoClonado = articleRef.cloneNode( true );
    // document.querySelector("#article-news").appendChild( nodoClonado );
};

newElement();

const changeColor = (color) => {
    const refIntro = document.getElementById("noticias");
    refIntro.style.color = color;
}
changeColor ("red"); 

// Agregar a un elemento un border
// .style.border 
// .style.border = "thick solid #0000FF";

const changeBorder = (color) => {
    const refIntro = document.getElementById("noticias");
    refIntro.style.border = `thick solid ${color}`;
}
changeBorder ("#ff7987");

//--Propiedades de visualizacion(desaparecer elementos d)--
const quitarBoton = ( ) => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.display = "none"; // quitar elemento
}

const ocultarBoton = () => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.visibility = "hidden"; // ocultar elemento
}
const restablecerBoton = () => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.removeAttribute("style");
}

