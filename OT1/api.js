// api.js
const axios = require('axios');

async function buscarDadosDaAPI() {
  try {
    // Faz uma requisição GET para a URL especificada
    const resposta = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

    console.log("Dados recebidos com sucesso!");
    console.log(resposta.data);

  } catch (erro) {
    console.error("Ocorreu um erro ao buscar os dados:", erro.message);
  }
}

buscarDadosDaAPI();