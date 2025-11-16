//a) Selecionar elemnto <h1> e alterar texto    

let titulo = document.getElementById('titulo'); 
titulo.innerText = "Bem vindo ao meu site";

//b)Selecionar elementos com classe texto e alterar cores

let texto = document.getElementsByClassName('texto');
texto[0].style.color = "blue";
texto[1].style.backgroundColor = "green";
texto[1].style.color = "yellow";

//c)Selecionar o primeiro paragrafo e mudar o texto

let primeiroTexto = document.querySelector('.texto');
primeiroTexto.innerText = "Este é um novo texto";

//d)Selecionar todos os paragrafos e mostra qtde

let todosParagrafos = document.querySelectorAll('p');
console.log(`Existem ${todosParagrafos.length} paragrafos por pagina`)

//e)Criando um novo elemento <p>

let novoParagrafo = document.createElement('p');
novoParagrafo.innerText = 'Este é um novo paragrafo';

//e2)Adicionando o novo paragrafo ao elemento <div>

let novaDiv = document.getElementById('novaDiv');
novaDiv.appendChild(novoParagrafo);

//Alterando o link do href 

let link = document.getElementById('link');
link.setAttribute('href','https://ge.globo.com/futebol/times/corinthians/');
console.log(link.getAttribute('href'));

let paragrafo = document.getElementById('paragrafoNovo');
paragrafo.classList.add('destaque');