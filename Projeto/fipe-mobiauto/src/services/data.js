export const fetchMarcas = async () => {
  const response = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas');
  const result = await response.json();
  return result;
}

export const fetchModelos = async (marca) => {
  const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos`);
  const result = await response.json();
  return result;
}

export const fetchAnos = async (marca, modelo) => {
  const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos/${modelo}/anos`);
  const result = await response.json();
  return result;
}

export const fetchFipe = async (marca, modelo, ano) => {
  const response = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos/${modelo}/anos/${ano}`);
  const result = await response.json();
  return result;
}