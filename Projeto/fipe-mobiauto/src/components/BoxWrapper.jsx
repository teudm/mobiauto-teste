import { Box, FormControl } from '@mui/material'
import React from 'react'
import ConsultButton from './ConsultButton'
import SelectAno from './SelectAno'
import SelectMarca from './SelectMarca'
import SelectModelo from './SelectModelo'

export default function BoxWrapper() {
  return (
    <Box sx={{
      backgroundColor: '#fff',
      boxShadow:'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      minWidth: '60%',
      minHeight: '100%',
      borderRadius: '5px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <SelectMarca />
      <SelectModelo />
      <SelectAno />
      <ConsultButton />
    </Box>
  )
}
