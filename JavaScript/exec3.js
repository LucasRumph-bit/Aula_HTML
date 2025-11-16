const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let somaPares = 0;
let somaPrimos = 0;

function Primo(n) {
 if (n < 2) return false; 
 for (let i = 2; i <= Math.sqrt(n); i++) {
   if (n % i === 0) return false;
 }
 return true;
}

for (let num of numeros) {
 if (num % 2 === 0) {
   somaPares += num;
 }
 if (Primo(num)) {
   somaPrimos += num;
 }
}

console.log("Soma dos números pares: " + somaPares);
console.log("Soma dos números primos: " + somaPrimos);