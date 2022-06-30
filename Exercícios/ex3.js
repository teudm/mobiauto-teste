// Exercício 3
// Faça uma chamada para a api "rick and morty" e resgate informações dos seguintes personagens: Rick
// Sanchez, Morty Smith, Summer Smith, Beth Smith, Jerry Smith. Ajuste os dados para que fiquem igual à
// saída de exemplo abaixo.
// Documentação
// https://rickandmortyapi.com/documentation/#rest

async function getRickAndMortyCharacters() {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  const results = data.results;
  let characters = [];
  for (let i = 0; i < 4; i++) {
    const { name: nome, gender: genero, image: avatar, species: especie } = results[i];
    characters = [...characters, {nome, genero, avatar, especie}]
  }
  return characters;
}

module.exports = getRickAndMortyCharacters;
