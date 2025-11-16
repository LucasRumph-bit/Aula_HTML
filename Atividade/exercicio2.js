function calculo(){
    let veiculo = document.querySelector('#veiculo').value;
    let preco = Number(document.querySelector('#preco').value);

    let valor = preco/2;
    let parcela = Math.ceil(valor/12);

    let msgveiculo = document.querySelector('#msgveiculo');
    let msgpreco = document.querySelector('#msgpreco');
    let msgparcela = document.querySelector('#msgparcela');

    msgveiculo.innerText = `Promoção: ${veiculo}`;
    msgpreco.innerText = `Entrada de: ${valor} `;
    msgparcela.innerText = `+ 12x de R$: ${parcela} `;

}

//vincula o botao
let botao = document.querySelector('#botao');
botao.addEventListener('click', function(){
    calculo();
});


