console.log('Arquivo principal sendo executado.');

const moduloImportado = require('./meuModulo.js');

// 2. Agora podemos usar o que foi exportado
console.log('\nMensagem do módulo:', moduloImportado.mensagem);

const resultadoSoma = moduloImportado.funcaoDeSoma(10, 5);
console.log('Resultado da soma do módulo:', resultadoSoma);