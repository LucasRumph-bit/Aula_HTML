function calculo(){
    let produto = document.querySelector('#produto').value;
    let preco = Number(document.querySelector('#preco').value);

    let promocao = preco * 2 + preco / 2;
    let valor = preco / 2;

    let msgproduto = document.querySelector('#msgproduto');
    let msgvalor = document.querySelector('#msgvalor');

    msgproduto.innerText = `${produto} - Promoção leve 3 por R$: ${promocao}`;
    msgvalor.innerText = `O 3º produto custa apenas R$: ${valor}`;

}

let botao = document.querySelector('#botao');
botao.addEventListener('click', function(){
    calculo();
});


