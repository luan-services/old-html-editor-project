/* listener de quando mudar conteúdo da div */

document.getElementById("content-box").addEventListener("input", function() {
    let html = document.getElementById("content-box").innerHTML;
    document.getElementById("result-box-1").innerText = html;
    document.getElementById("result-box-2").innerText = html;
}, false);


/* copiar texto */

function copiarTexto() {
    let texto = document.getElementById("content-box").innerText;
  
    navigator.clipboard.writeText(texto);
  
    /* Alert the copied text */
    alert("Texto copiado para área de transfêrencia");
};


function setEstilo(estilo) {
    if (estilo == 'createLink' || estilo == 'insertImage') {
        let url = prompt('Digite o url:', 'https://');
        return document.execCommand(estilo, false, url);
    }
    document.execCommand(estilo, false, null);
};

function setTamanho(tamanho) {
    document.execCommand('fontSize', false, tamanho);

}

function setFonte(nome) {
    document.execCommand('fontName', false, nome);

}

function setCor(cor) {
    document.execCommand('foreColor', false, cor);

}