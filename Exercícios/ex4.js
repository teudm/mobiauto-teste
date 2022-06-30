// Exercício 4
// Faça uma função que verifica se a primeira letra de uma string é maiúscula, retornando true ou false.
// Exemplos:
// checkIfTheFirstLetterIsUppercase("Brasil") --> true
// checkIfTheFirstLetterIsUppercase("mobiauto") --> false
// checkIfTheFirstLetterIsUppercase("xXx xXx") --> false
// checkIfTheFirstLetterIsUppercase("xDD") --> false
// checkIfTheFirstLetterIsUppercase("Deu Certo!") --> true

function checkIfTheFirstLetterIsUppercase(word) {
  if (word.length < 1) return false;
  return word[0].toUpperCase() === word[0] ? true : false;
}

module.exports = checkIfTheFirstLetterIsUppercase;
