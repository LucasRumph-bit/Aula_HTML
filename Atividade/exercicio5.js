function calculo(){
    let valor = Number(document.querySelector('#valor').value);
    let tempo = Number(document.querySelector('#tempo').value);

    let horas =Math.ceil(tempo/15);
    let uso = horas * valor;
    

    let msgvalor = document.querySelector('#msgvalor');

    msgvalor.innerText = `Valor a pagar R$: ${uso}`;

}

let botao = document.querySelector('#botao');
botao.addEventListener('click', function(){
    calculo();
});
