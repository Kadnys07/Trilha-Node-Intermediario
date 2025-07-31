// arquivo-grande.js
const fs = require('fs');
console.log('Gerando arquivo grande...');
const file = fs.createWriteStream('./grande.txt');

for (let i = 0; i <= 1e6; i++) { // 1 milhão de linhas
  file.write('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet quam ac ligula.\n');
}

file.end();
console.log('Arquivo grande gerado com sucesso!');