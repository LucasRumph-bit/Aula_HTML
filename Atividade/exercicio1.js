function calculo(){
    let titulo = document.querySelector('#titulo').value;
    let duracao = Number(document.querySelector('#duracao').value);

    let horas = Math.floor(duracao/60);
    let minutos = duracao % 60;

    let msgtitulo = document.querySelector('#msgtitulo');
    let msgDuracao = document.querySelector('#msgDuracao');

    msgtitulo.innerText = `Titulo: ${titulo}`;
    msgDuracao.innerText = `Duração: ${horas} hora(s) e ${minutos} min`;

}

//vincula o botao
let botao = document.querySelector('#botao');
botao.addEventListener('click', function(){
    calculo();
});


