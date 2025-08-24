// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//hola
let amigos = [];

function agregarAmigo() {
  let inputElement = document.getElementById("amigo");
  let amigoValue = inputElement.value;
  if (amigoValue.trim() === "") {
    alert("Por favor, escribe un nombre");
    return;
  }
  amigos.push(amigoValue);

  inputElement.value = "";
  mostrarAmigos(amigos);
}

function mostrarAmigos(amigos) {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
  console.log(amigos);
}

function sortearAmigo() {
  if (amigos === 0) {
    alert("Por favor escribe el nombre de tus amigos");
  } else {
    let numeroRandom = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroRandom];
    document.getElementById(
      "resultado"
    ).textContent = `El amigo sorteado es: ${amigoSorteado}`;
  }
}
