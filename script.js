let cores = [
    "lightblue",
    "lightgreen",
    "lightyellow",
    "lavender",
    "pink"
];
let indice = 0;
function mudarCor() {
    document.body.style.backgroundColor = cores[indice];
    indice++;
    if (indice >= cores.length) {
        indice = 0;
    }
}
function esconderTexto() {
    document.getElementById("texto").style.display = "none";
}
function atualizarRelogio() {
    let agora = new Date();
    document.getElementById("dataHora").innerHTML =
        agora.toLocaleString("pt-BR");

}
function iniciarRelogio() {
    atualizarRelogio();
    setInterval(atualizarRelogio, 1000);

}

function trocarImagem() {

    let imagem = document.getElementById("imagem");

    if (imagem.src.includes("riki.jpg")) {

        imagem.src = "niki.jpg";

    } else {

        imagem.src = "riki.jpg";

    }

}
