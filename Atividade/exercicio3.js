function calculo(){
    let valor = Number(document.querySelector('#valor').value);
    let gramas = Number(document.querySelector('#gramas').value);

    let consumo = (gramas/1000)*valor;

    let msgvalor = document.querySelector('#msgvalor');

    msgvalor.innerText = `Valor a pagar R$: ${consumo.toFixed(2)}`;
}

//vincula o botao
let botao = document.querySelector('#botao');
botao.addEventListener('click', function(){
    calculo();
});


