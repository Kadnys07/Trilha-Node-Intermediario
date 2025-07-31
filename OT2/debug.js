function calcularMedia(a, b) {
  const soma = a + b;

  debugger; // Esta palavra-chave pausa o debugger
  const media = soma / 2;
  return media;
}

const num1 = 10;
const num2 = '20'; // BUG: 

console.log('Iniciando cálculo...');
const resultadoFinal = calcularMedia(num1, num2);
console.log(`O resultado final é: ${resultadoFinal}`);