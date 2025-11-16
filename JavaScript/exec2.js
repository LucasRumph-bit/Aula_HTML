const pessoas = [
    {idade: 19, nota: 3},
    {idade: 15, nota: 2},
    {idade: 16, nota: 2},
    {idade: 17, nota: 3},
    {idade: 21, nota: 1},
    {idade: 16, nota: 1},
    {idade: 19, nota: 1},
    {idade: 18, nota: 3},
    {idade: 20, nota: 2},
    {idade: 22, nota: 3},
    {idade: 14, nota: 2},
    {idade: 25, nota: 2},
    {idade: 27, nota: 3},
    {idade: 12, nota: 1},
    {idade: 22, nota: 3}

];

let mediaIdade=pessoas.idade;
let qtdPessoas=pessoas.nota;
let idadeMedia=0;
let notaRegular=0;
let qtdBom=0;
let somaIdade=0;


for (var i =0;i< pessoas.length;i++) {
    if (pessoas[i].nota==3) {
        somaIdade += pessoas[i].idade;
        idadeMedia++;
    }
    if (pessoas[i].nota==1) {
        notaRegular++;
    }
    if (pessoas[i].nota==2) {
        qtdBom++;
    }
}

let mediaIdadePessoas=somaIdade/idadeMedia;
let totalPessoas = pessoas.length;
let porcentagemBom = (qtdBom/ totalPessoas) * 100;

console.log("Media das idade (otimo) " + mediaIdadePessoas.toFixed(2) + " anos"  )
console.log("Quantidade de pessoas que responderam  regular " + notaRegular);
console.log("Porcentagem de pessoas que  responderam bom: " + porcentagemBom.toFixed(2) + " %");