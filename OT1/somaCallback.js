// somaCallback.js
function somar(a, b, callback) {
  console.log(`Somando ${a} + ${b}...`);
  const resultado = a + b;
  callback(resultado);
}

function exibirResultado(resultadoFinal) {
  console.log(`O resultado da soma é: ${resultadoFinal}`);
}

somar(15, 7, exibirResultado);