
const agora = new Date();

// Opções de formatação para um padrão brasileiro
const opcoesDeFormatacao = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZone: 'America/Sao_Paulo'
};

const dataFormatada = agora.toLocaleString('pt-BR', opcoesDeFormatacao);

console.log(`A data e hora atuais são: ${dataFormatada}`);