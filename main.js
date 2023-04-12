//Haciendo el menu interactivo
let aMenu = document.querySelector(".amenu");
let cMenu = document.querySelector(".cmenu");
let ventanaM = document.querySelector(".menu");
let seC = document.querySelector(".cc");
let seC1 = document.querySelector(".cc1");
let seC2 = document.querySelector(".cc2");
let seC3 = document.querySelector(".cc3");
let seC4 = document.querySelector(".cc4");
//Variables para cerrar las ventanas de los proyectos.
let bCss = document.querySelector("#proCss");
let bJs = document.querySelector("#proJs");
let ventanaCss = document.querySelector(".css");
let ventanaJs = document.querySelector(".js");
let bGit = document.querySelector("#proGit");
let ventanagit = document.querySelector(".git");
let ventanaTail = document.querySelector(".tailwind");
let bTail = document.querySelector("#proTail");

bCss.addEventListener("click", abrirVCss);
bJs.addEventListener("click", abrirVjs);
bGit.addEventListener("click", abrirVgit);
bTail.addEventListener("click", abrirVTail)

//Funciones para las ventanas de los proyectos

function abrirVCss(){
  ventanaCss.classList.remove("inactive");
  ventanaJs.classList.add("inactive");
  ventanagit.classList.add("inactive");
  ventanaTail.classList.add("inactive");
}

function abrirVjs(){
  ventanaCss.classList.add("inactive");
  ventanaJs.classList.remove("inactive");
  ventanagit.classList.add("inactive");
  ventanaTail.classList.add("inactive");
}
function abrirVgit(){
  ventanaCss.classList.add("inactive");
  ventanaJs.classList.add("inactive");
  ventanaTail.classList.add("inactive");
  ventanagit.classList.remove("inactive");
}

function abrirVTail(){
  ventanaTail.classList.remove("inactive");
  ventanaCss.classList.add("inactive");
  ventanaJs.classList.add("inactive");
  ventanagit.classList.add("inactive");
}


aMenu.addEventListener("click", abrirMenu);
cMenu.addEventListener("click", cerrarMenu);
seC.addEventListener("click", cerrarMenu);
seC1.addEventListener("click", cerrarMenu);
seC2.addEventListener("click", cerrarMenu);
seC3.addEventListener("click", cerrarMenu);
seC4.addEventListener("click", cerrarMenu);

function abrirMenu(){
        ventanaM.classList.remove("inactive");
}

function cerrarMenu(){
    ventanaM.classList.add("inactive");
}



//Haciendo que mi nombre se escriba el solo
const texto = document.querySelector(".texto").innerHTML;
document.querySelector(".texto").innerHTML = "";
let index = 0;
let intervalo;

// Creamos el observer para el elemento #texto
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Si el elemento es visible
    if (entry.isIntersecting) {
      // Iniciamos la función que muestra las letras
      intervalo = setInterval(mostrarLetras, 80);
    } else {
      // Si el elemento no es visible, detenemos la función
      clearInterval(intervalo);
      index = 0;
    document.querySelector(".texto").innerHTML = "";
    }
  });
});

observer.observe(document.querySelector(".texto"));

function mostrarLetras() {
  if (index < texto.length) {
    document.querySelector(".texto").innerHTML += texto.charAt(index);
    index++;
  } else {
    // Si ya se mostró todo el texto, detenemos el intervalo
    clearInterval(intervalo);
  }
}


// Obtener el div y el iframe
var div = document.getElementById("miDiv");
var iframe = div.querySelector("iframe");

// Ajustar el tamaño del iframe al tamaño del div
iframe.addEventListener("load", function() {
  iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
});

/* var div1 = document.getElementById("miDivCss");
var iframe = div1.querySelector("iframe"); */

// Ajustar el tamaño del iframe al tamaño del div
/* iframe.addEventListener("load", function() {
  iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
}); */
