// Abre a foto em tamanho maior quando clicada
function abrirModal(elemento) {
    var modal = document.getElementById("meuModal");
    var imgModal = document.getElementById("imgModal");
    var imagemClicada = elemento.getElementsByTagName('img')[0].src;
    
    modal.style.display = "flex";
    imgModal.src = imagemClicada;
}

// Fecha a foto expandida
function fecharModal() {
    var modal = document.getElementById("meuModal");
    modal.style.display = "none";
}