import React, { useContext, useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import context from '../context/Context';
import Select from '@mui/material/Select';
import { FormControl } from '@mui/material';

export default function SelectAno() {
  const {
    anos,
    selectedModelo,
    selectedMarca,
    selectedAno,
    setSelectedAno,
    setFipe
  } = useContext(context);
  const [isModeloSelected, setIsModeloSelected] = useState(false);
  const handleChange = (event) => {
    setSelectedAno(event.target.value);
  };

  useEffect(() => {
    selectedAno.length > 0 ? setFipe(true) : setFipe(false);
  }, [selectedAno, setFipe]);

  useEffect(() => {
    anos.length < 1 ? setIsModeloSelected(false) : setIsModeloSelected(true); 
  }, [anos]);

  return(
    isModeloSelected
    ? <FormControl fullWidth sx={{ maxWidth: '60%', marginBottom: '20px' }}>
        <InputLabel id="anos">Anos</InputLabel>
        <Select
          labelId="anos"
          id="select-anos"
          value={selectedAno}
          label="Anos"
          onChange={handleChange}
        >
          {
            anos.length > 1
            ? anos.map((ano, index) => (
              <MenuItem key={ index } value={ ano.codigo }>{ ano.nome }</MenuItem> 
            ))
            : ''
          }
        </Select>
      </FormControl>
    : ''
  )
}
