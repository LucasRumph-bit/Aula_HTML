alert("Salve");

//Variaveis 

const array = [3.14];
array[0] = 5;
console.log(array);

let nome = "Lucas"; //string
let opcao = true; //boolean
let peso = 80.5; //float
let idade = 47; //int

let idades = [42,36,7,99]; //Array
console.log(idades[0]);
console.log(idades[1]);
console.log(idades[2]);
console.log(idades[3]);
console.log(idades[4]);
idades[99] = "ultimo";
console.log(idades);
let valores = [10, "Lucas", 5.55, true];
console.log(valores);

let objeto = document.querySelector("h1")
console.log(objeto.textContent);

objeto.textContent = "Novo Texto";

function soma(n1=1,n2=2){
    console.log("Soma: " + (n1+n2));
}

soma(8,10);
soma(9,8);
soma();

    let valor1 = 10;
    let valor2 = 20;
    if (valor1 > valor2) {
        console.log("Valor 1 é maior que valor 2");
    } else {
        console.log("Valor 2 é maior que valor 1");
    }