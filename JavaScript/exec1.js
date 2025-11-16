const pessoas = [
    {altura: 1.75, sexo: 'M'},
    {altura: 1.60, sexo: 'F'},
    {altura: 1.80, sexo: 'M'},
    {altura: 1.70, sexo: 'M'},
    {altura: 1.55, sexo: 'F'},
    {altura: 1.90, sexo: 'M'},
    {altura: 1.98, sexo: 'M'},
    {altura: 1.76, sexo: 'M'},
    {altura: 1.88, sexo: 'M'},
    {altura: 1.84, sexo: 'M'},
    {altura: 1.63, sexo: 'F'},
    {altura: 1.73, sexo: 'M'},
    {altura: 1.71, sexo: 'F'},
    {altura: 1.99, sexo: 'M'},
    {altura: 1.87, sexo: 'M'},
    {altura: 1.54, sexo: 'F'}
];

let maiorAltura = pessoas[0].altura;
let menorAltura = pessoas[0].altura;
let somaAlturasMulhres = 0;
let qtdMulheres = 0;
let qtdHomens = 0;

for ( var i = 0; i < pessoas.length;i++) {
    if (pessoas[i].altura > maiorAltura) {
        maiorAltura=pessoas[i].altura;
    }
    if (pessoas[i].altura < menorAltura) {
        menorAltura = pessoas[i].altura;
    }
    if (pessoas[i].sexo === 'F') {
        somaAlturasMulhres += pessoas[i].altura;
        qtdMulheres++;
    } else if (pessoas[i].sexo === 'M') {
        qtdHomens++;
    }
}

let mediaMulheres=0;
if (qtdMulheres > 0) {
    mediaMulheres = somaAlturasMulhres / qtdMulheres;
} else {
    mediaMulheres = 0;
}

console.log("Maior altura do grupo " + maiorAltura.toFixed(2) + " m");
console.log("Menor altura do grupo " + menorAltura.toFixed(2) + " m");
console.log("Media de altura das mulheres: " + mediaMulheres.toFixed(2) + " m");
console.log("Numero de Homens: " + qtdHomens); 

