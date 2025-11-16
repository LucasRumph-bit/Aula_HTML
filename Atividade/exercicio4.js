function calculo(){
    let titulo = document.querySelector('#titulo').value;
    let preco = Number(document.querySelector('#preco').value);

    let promocao = 2 * preco;
    let valor = Math.floor(promocao);

    let msgtitulo = document.querySelector('#msgtitulo');
    let msgpreco = document.querySelector('#msgpreco');

    msgtitulo.innerText = `Promoção de ${titulo}`;
    msgpreco.innerText = `Leve 2 por apenas R$: ${valor}`;

}

let botao = document.querySelector('#botao');
botao.addEventListener('click', function(){
    calculo();
});


