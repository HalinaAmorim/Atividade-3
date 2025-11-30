
const configuracoes = {
  cache: {
    tempoExpiracao: null   
  }
};


const tempoBruto = configuracoes.cache?.tempoExpiracao;


const tempoFinal = tempoBruto ?? 600;

console.log("Tempo bruto:", tempoBruto); 
console.log("Tempo final:", tempoFinal);

