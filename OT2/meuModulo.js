console.log('Módulo sendo inicializado...');

const saudacao = 'Olá, vindo do meu módulo!';

function somar(a, b) {
  return a + b;
}

// Para que outros arquivos possam usar 'saudacao' e 'somar', precisamos exportá-los.
module.exports = {
  mensagem: saudacao,
  funcaoDeSoma: somar
};