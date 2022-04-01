import React from 'react';
import { Label, Select } from './styles';

function SelectCoins({
  labelText, options = [], coin, setCoin,
}) {
  return (
    <>
      <Label>{labelText}</Label>
      <Select value={coin} onChange={(e) => setCoin(e.target.value)}>
        <option value="">-- Seleccione --</option>
        {options.map((optionCoin) => (
          <option key={optionCoin.id} value={optionCoin.id}>
            {optionCoin.name}
          </option>
        ))}
      </Select>
    </>
  );
}

export default SelectCoins;
