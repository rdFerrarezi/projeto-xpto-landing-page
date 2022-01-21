const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');

let imagemAtual = 0;

setaAvancar.addEventListener('click', function(){

    imagemAtual++;

    // console.log(imagemAtual)
    // if(imagemAtual > imagensPainel.length){
    //     console.log("estouro")
    // }
    // else{
    // }
    imagensPainel.forEach(img => {
        img.classList.remove('mostrar')
    });
    imagensPainel[imagemAtual].classList.add('mostrar');

});