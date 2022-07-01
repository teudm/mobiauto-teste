import { Box, maxWidth } from "@mui/system";
import Head from "next/head";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { fetchFipe } from '../../../../services/data';
import styles from '../../../../styles/Home.module.css'


export default function Fipe() {
  const { query: { marca, modelo, ano } } = useRouter();
  const [fipeData, setFipeData] = useState([]);
  useEffect(() => {
    marca && fetchFipe(marca, modelo, ano)
    .then((data) => setFipeData(data));
  }, [ano, marca, modelo])
  return (
    <div className={styles.container}>
        <Head>
          <title>Teste front-end - Mobiauto</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        </Head>

        <main className={styles.main}>
          <Box sx={{ backgroundColor: 'rgb(237, 247, 237)', padding: '60px 150px' }}>
            <h1>
              Tabela Fipe: Preço {fipeData.Modelo} {fipeData.AnoModelo}
            </h1>
            <Box sx={{
              color: '#fff',
              padding: '20px',
              fontSize: '24px',
              backgroundColor: 'rgb(116, 182, 55)',
              maxWidth: 'fit-content',
              margin: 'auto auto',
              borderRadius: '100px',
              fontWeight: '700'
            }}>{fipeData.Valor}</Box>
            <Box sx={{
              color: '#555',
              margin: '20px auto',
              maxWidth: 'fit-content',
              fontSize: '12px'
            }}>Esse é o preço de compra do veículo</Box>
          </Box>
        </main>
      </div>
  )
}