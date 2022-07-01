import React, { useContext, useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import context from '../context/Context';
import Select from '@mui/material/Select';
import { fetchAnos } from '../services/data';
import { FormControl } from '@mui/material';

export default function SelectModelo() {
  const { modelos, setAnos, selectedModelo, setSelectedModelo, selectedMarca } = useContext(context);
  const [isMarcaSelected, setIsMarcaSelected] = useState(false);
  const handleChange = (event) => {
    setSelectedModelo(event.target.value);
  };
  useEffect(() => {
    fetchAnos(selectedMarca, selectedModelo)
    .then((anos) => { setAnos(anos) })
  }, [selectedMarca, selectedModelo, setAnos])
  useEffect(() => {
    modelos.length < 1 ? setIsMarcaSelected(false) : setIsMarcaSelected(true); 
  }, [modelos])
  return(
    <FormControl fullWidth sx={{ maxWidth: '60%', marginBottom: '20px' }}>
      <InputLabel id="modelos">Modelos</InputLabel>
      <Select
        labelId="modelos"
        id="select-modelos"
        value={selectedModelo}
        label="Modelos"
        onChange={handleChange}
        disabled={!isMarcaSelected}
      >
        {
          modelos.length > 1
          ? modelos.map((modelo, index) => (
            <MenuItem key={ index } value={ modelo.codigo }>{ modelo.nome }</MenuItem> 
          ))
          : ''
        }
      </Select>
    </FormControl>
  )
}
