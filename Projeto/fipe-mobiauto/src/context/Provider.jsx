import React, { useState, useEffect } from 'react';
import context from './Context';
import { fetchMarcas } from '../services/data';

export default function Provider({ children }) {
  const [marcas, setMarcas] = useState([]);
  const [selectedMarca, setSelectedMarca] = useState('');
  const [modelos, setModelos] = useState([]);
  const [selectedModelo, setSelectedModelo] = useState('');
  const [anos, setAnos] = useState([]);
  const [selectedAno, setSelectedAno] = useState('');
  const [fipe, setFipe] = useState(false);

  useEffect(() => {
    fetchMarcas()
    .then(marcas => setMarcas(marcas));
  }, [])

  const contextValue = {
    marcas,
    modelos,
    setModelos,
    anos,
    setAnos,
    fipe,
    setFipe,
    selectedMarca,
    setSelectedMarca,
    selectedModelo,
    setSelectedModelo,
    selectedAno,
    setSelectedAno
  }
  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  )
}