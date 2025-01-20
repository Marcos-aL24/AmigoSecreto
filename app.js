let amigos = [];
const listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
function agregarAmigo() {
    const amigoNuevo = document.getElementById("amigo").value.trim();

    if (!amigoNuevo) {
        alert("Por favor escribe un amigo");
    } else {
        // Agrega el nuevo amigo al array
        amigos.push(amigoNuevo);

        // Actualiza la lista en el HTML
        actualizarLista();

        // Limpia el input después de agregar el amigo
        document.getElementById("amigo").value = "";
    }

    console.log(amigos);
}

function actualizarLista() {
    // Limpia la lista antes de actualizarla
    listaAmigos.innerHTML = "";

    // Crea los elementos <li> para cada amigo y los añade al <ul>
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo; // Establece el texto del <li> con el nombre del amigo
        listaAmigos.appendChild(li); // Agrega el <li> a la lista
    })}

function sortearAmigo(){
    let Azar = Math.floor(Math.random()*amigos.length);
    let AmigoSorteado= amigos[Azar]
    resultado.innerHTML=`<li>El amigo sorteado es: <strong>${AmigoSorteado}</strong></li>`
}