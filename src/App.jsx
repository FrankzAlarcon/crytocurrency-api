import React, { useEffect, useState } from 'react';
import imagenCrypto from './img/imagen-criptos.png';
import Form from './components/Form/Form';
import { Container, Image, Heading } from './styles';

function App() {
  const [coins, setCoins] = useState({});
  const [quoteResult, setQuoteResult] = useState({});

  useEffect(() => {
    if (Object.keys(coins).length !== 0) {
      const quoteCryto = async () => {
        const { cryptoCoin, coin } = coins;
        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`;
        const response = await fetch(URL);
        const responseJson = await response.json();
        setQuoteResult(responseJson.DISPLAY[cryptoCoin][coin]);
      };
      quoteCryto();
    }
  }, [coins]);

  return (
    <Container>
      <Image src={imagenCrypto} alt="crypto coins" />
      <div>
        <Heading className="App">Cotiza Criptomonedas al Instante</Heading>
        <Form setCoins={setCoins} />
      </div>
    </Container>
  );
}

export default App;
