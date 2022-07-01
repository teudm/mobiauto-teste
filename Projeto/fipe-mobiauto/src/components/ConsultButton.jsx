import Button from '@mui/material/Button'
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import context from '../context/Context';

export default function ConsultButton() {
  const [hasFipe, setHasFipe] = useState(false);
  const [url, setUrl] = useState('');
  const { fipe, selectedMarca, selectedModelo, selectedAno } = useContext(context);

  useEffect(() => {
    setHasFipe(fipe)
  }, [fipe])
  useEffect(() => {
    hasFipe ? setUrl(`/${selectedMarca}/${selectedModelo}/${selectedAno}`) : setUrl('');
  }, [selectedAno, hasFipe, selectedMarca, selectedModelo])
  return(
    <Link href={url}>
      <Button variant="contained" disabled={!hasFipe} sx={{
        padding: '10px 60px',
        marginBottom: '20px'
      }}>Consultar preço</Button>
    </Link>
  )
}
