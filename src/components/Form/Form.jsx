import React, { useEffect, useState } from 'react';
import SelectCoins from '../SelectCoins/SelectCoins';
import Error from '../Error/Error';
import { coins } from '../../data/coins';
import { Input } from './styles';

function Form({ setCoins }) {
  const [coin, setCoin] = useState('');
  const [cryptoCoin, setcryptoCoin] = useState('');
  const [cryptoCoins, setCryptoCoins] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

      const response = await fetch(URL);
      const responseJson = await response.json();
      const cryptoCoinsFetched = responseJson.Data.map((cryptoCoinFetched) => ({
        id: cryptoCoinFetched.CoinInfo.Name,
        name: cryptoCoinFetched.CoinInfo.FullName,
      }));
      setCryptoCoins(cryptoCoinsFetched);
    };
    fetchApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([coin, cryptoCoin].includes('')) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
      return;
    }
    setError(false);
    setCoins({ coin, cryptoCoin });
  };
  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        <SelectCoins labelText="Elige tu Moneda" options={coins} coin={coin} setCoin={setCoin} />
        <SelectCoins labelText="Elige tu Crypto Moneda" options={cryptoCoins} coin={cryptoCoin} setCoin={setcryptoCoin} />
        <Input type="submit" value="Cotizar" />
      </form>
    </>
  );
}

export default Form;
