import React, { useEffect, useState } from 'react';
import imagenCrypto from './img/imagen-criptos.png';
import Form from './components/Form/Form';
import Resultado from './components/Resultado/Resultado';
import Spinner from './components/Spinner/Spinner';
import { Container, Image, Heading } from './styles';

function App() {
  const [coins, setCoins] = useState({});
  const [quoteResult, setQuoteResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(coins).length !== 0) {
      setLoading(true);
      const quoteCryto = async () => {
        const { cryptoCoin, coin } = coins;
        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`;
        const response = await fetch(URL);
        const responseJson = await response.json();
        setQuoteResult(responseJson.DISPLAY[cryptoCoin][coin]);
        setLoading(false);
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
        {loading && <Spinner />}
        {quoteResult.PRICE && !loading && <Resultado quoteResult={quoteResult} />}
      </div>
    </Container>
  );
}

export default App;
