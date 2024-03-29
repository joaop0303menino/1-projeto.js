const botaoplaypause = document.getElementById("play-pause"); 
const botaoproximo = document.getElementById("proximo")
const botaoanterior = document.getElementById("anterior")
const audiocapitulo = document.getElementById("audio-capitulo");
const imagem = document.getElementById("imagens")
const nomecapitolo = document.getElementById("capitulo")
const numerodecapitulos = 10;  
let TaTocando = 0;
let capituloAtual = 1;

function TocarFaixa() {
    audiocapitulo.play();
    botaoplaypause.classList.remove("bi-play-circle-fill")
    botaoplaypause.classList.add("bi-pause-circle-fill")
}
function PausarFaixa() {
    audiocapitulo.pause();
    botaoplaypause.classList.remove("bi-pause-circle-fill")
    botaoplaypause.classList.add("bi-play-circle-fill")
}
function TocarOuPausar() {
    if (TaTocando === 0){
        TocarFaixa();
        TaTocando = 1;
    } else {
        PausarFaixa();
        TaTocando = 0;
    }
}

function proximaFaixa() {
    if (capituloAtual === numerodecapitulos) {
        capituloAtual = 1;
    } else {
       capituloAtual = capituloAtual + 1  
    }

    audiocapitulo.src = "./books/dom-casmurro/"+ capituloAtual+ ".mp3";
    imagem.src = './images/'+ capituloAtual+ '.jpg'
    TocarFaixa();
    trocarnome();

}

function trocarnome() {
    nomecapitolo.innerText = "Capítulo" + capituloAtual 
}

function faixaAnterior() {
    if (capituloAtual === 1) {
        capituloAtual =numerodecapitulos;
    } else {
        capituloAtual = capituloAtual - 1
    }
     
    audiocapitulo.src = "./books/dom-casmurro/"+ capituloAtual+ ".mp3";
    imagem.src = './images/'+ capituloAtual+ '.jpg'
    TocarFaixa();
    trocarnome();

}

botaoplaypause.addEventListener("click", TocarOuPausar);
botaoproximo.addEventListener("click", proximaFaixa);
botaoanterior.addEventListener("click", faixaAnterior);

