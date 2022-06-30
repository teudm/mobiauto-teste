// Exercício 1
// Geralmente, quando você compra algo, é perguntado se o número do seu cartão de crédito, telefone ou
// resposta para sua pergunta secreta ainda está correto. No entanto, como alguém pode olhar por cima do
// seu ombro, você não quer que isso apareça em sua tela. Em vez disso, nós o mascaramos. Sua tarefa é
// escrever uma função maskify, que altera todos, exceto os últimos quatro caracteres, para "#".
// Exemplos:
// "4556364607935616" --> "############5616"
// "64607935616" --> "######5616"
// "1" --> "1"
// "" ---> ""
// "Skippy" --> "##ippy"
// "Nanananananananananana Batman!" --> "##########################man!"

function maskify(string) {
  if (string.length < 4) return string;
  const newString = string.slice(0, -4)
  .replace(/./g, '#')
  +('' + string).slice(-4);
  return newString;
}
module.exports = maskify;
