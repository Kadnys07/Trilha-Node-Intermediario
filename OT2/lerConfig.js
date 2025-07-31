
const fs = require('fs/promises');
const path = require('path');

async function carregarConfiguracao() {
  try {
    const caminhoConfig = path.join(__dirname, 'config.json');

    // 1. Lê o arquivo de configuração como texto
    const configEmTexto = await fs.readFile(caminhoConfig, 'utf8');

    // 2. Converte a string JSON em um objeto JavaScript
    const configObjeto = JSON.parse(configEmTexto);

    console.log('Configuração do banco de dados:');
    console.log('Host:', configObjeto.database.host);
    console.log('Usuário:', configObjeto.database.user);

    console.log('\nChave da API:', configObjeto.api_key);
    console.log('Logging habilitado?', configObjeto.features.enable_logging);

  } catch (erro) {
    console.error('Falha ao carregar o arquivo de configuração!', erro);
  }
}

carregarConfiguracao();