import React, { useContext, useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import context from '../context/Context';
import Select from '@mui/material/Select';
import { fetchModelos } from '../services/data';
import { FormControl } from '@mui/material';

export default function SelectMarca() {
  const { marcas, setModelos, selectedMarca, setSelectedMarca } = useContext(context);
  const handleChange = (event) => {
    setSelectedMarca(event.target.value);
  };
  useEffect(() => {
    fetchModelos(selectedMarca)
    .then(({ modelos }) => { setModelos(modelos) })
  }, [selectedMarca, setModelos])
  return(
    <FormControl fullWidth sx={{ maxWidth: '60%', margin: '20px 0' }}>
      <InputLabel id="marcas">Marcas</InputLabel>
      <Select
        labelId="marcas"
        id="select-marca"
        value={selectedMarca}
        label="Marca"
        onChange={handleChange}
      >
        {
          marcas.map((marca, index) => (
            <MenuItem key={ index } value={ marca.codigo }>{ marca.nome }</MenuItem> 
          ))
        }
      </Select>
    </FormControl>
  )
}
