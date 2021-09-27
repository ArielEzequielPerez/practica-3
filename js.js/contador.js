const contador = document.getElementById("contar");
const sumar = document.getElementById("incrementar");

let numero = 0;

sumar.addEventListener("click", ()=>{
    numero++;
    contador.innerHTML = numero;
});