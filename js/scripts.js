
var variableVarPi = 3.141592

let variableLet  = 2.718281

const constantePlank = 6.626070;

console.log(variableVarPi);
console.log(variableLet);
console.log(constantePlank);

console.log({variableVarPi});
console.log({variableLet});
console.log({constantePlank});

let vaiable;

variable = 1.12;
console.log({variable})
vaiable = false;
console.log({variable})

let diaActual = new Date();
console.log(diaActual);

let fechahora = diaActual.getDate() + "/"+ diaActual.getMonth() + "/"+diaActual.getFullYear()+" " + diaActual.getHours()+":" + diaActual.getMinutes()+":" + diaActual.getUTCSeconds(); 
console.log(fechahora)

let dia = diaActual.getDate();
let mes = (diaActual.getMonth() + 1).toString().padStart(2, "0");
let anio = diaActual.getFullYear();
let hora = diaActual.getHours();
let minuto = diaActual.getMinutes();
let segundos = diaActual.getSeconds();

let fechaHora2 = `${dia}/${mes}/${anio} ${hora}:${minuto}:${minuto}`
console.log(fechaHora2);

let mensajeEnHtml = document.getElementById("mensajito")
//alert(mensajeEnHtml.textContent);
//alert(mensajeEnHtml.innerHTML);

let parrafo = document.getElementById("mensajito").children[0].textContent;
//alert(parrafo)

let contenedor = document.getElementById("mensajito");
const parrafomensaje = contenedor.querySelector('[data-identificador ="Submensaje2"]');

alert(parrafomensaje.textContent);

const height = window.innerHeight;
const width = window.innerWidth;

console.log("Su pantalla posse: " + width + " pixeles de ancho y " + height+ " pixeles de alto")
console.log("window.screen.width: " + window.screen.width + " px "+ "window.screen.height: " + window.screen.height + " px")
console.log("window.screen.availWidth: " + window.screen.availWidth + " px "+ "window.screen.availHeight: " + window.screen.availHeight + " px")
console.log("window.body.clientWidth: " + document.body.clientWidth + " px "+ "window.body.clientHeight: " + document.body.clientHeight + " px")

function calcular(n1, n2, salida){
    primerSumando = document.getElementById(n1);
    segundoSumando = document.getElementById(n2);

    let calculo = (parseFloat(primerSumando.value) + parseFloat(segundoSumando.value));

    document.getElementById(salida).innerHTML = calculo;
}

function crearElemento(url = null){
    if(url !== null)
    {
        url = url;
    }
    else{
        url = "https://as2.ftcdn.net/jpg/01/09/00/83/220_F_109008395_OQDupHMza1V6CNOzrJwWAKlaktT4IsEW.jpg";
    }

    let objetoimagen = document.createElement("img");

    objetoimagen.id = "imagencreada"
    objetoimagen.src = url;
    objetoimagen.title = "Control de videojuego";
    objetoimagen.width = 220;
    objetoimagen.height = 165;
    objetoimagen.addEventListener('click', function(){
        objetoimagen.src = "https://encrypted-tbn0.gstatic.com/imagenes?q=tbn:ANd9GcTkU5595AC-bbsoPF-Ik0WzUbVj9rnAbs9lkw&s";
        objetoimagen.width = 225;
        objetoimagen.height = 225;
    });

    document.getElementById('lienzo').appendChild(objetoimagen);
}