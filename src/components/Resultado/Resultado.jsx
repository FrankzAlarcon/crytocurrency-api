import React from 'react';
import {
  Container, Price, Text, Img,
} from './styles';

function Resultado({ quoteResult }) {
  const {
    PRICE, HIGHDAY, LOWDAY, CHANGEPCTHOUR, IMAGEURL, LASTUPDATE,
  } = quoteResult;
  return (
    <Container>
      <Img src={`https://cryptocompare.com/${IMAGEURL}`} alt="crypto selected" />
      <div>
        <Price>
          El precio es de:
          {' '}
          <span>{PRICE}</span>
        </Price>
        <Text>
          Precio más alto del día:
          {' '}
          <span>{HIGHDAY}</span>
        </Text>
        <Text>
          Precio más bao del día:
          {' '}
          <span>{LOWDAY}</span>
        </Text>
        <Text>
          Variacion últimas horas:
          <span>{CHANGEPCTHOUR}</span>
        </Text>
        <Text>
          Última actualización:
          {' '}
          <span>{LASTUPDATE}</span>
        </Text>
      </div>
    </Container>
  );
}

export default Resultado;
