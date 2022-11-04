import { CurrencyResponceType, CurrencyType } from './types';

export const adapterResponceCurrencies = (
  currencies: Record<string, CurrencyResponceType>
): Record<string, CurrencyType> => {
  const newData: Record<string, CurrencyType> = {};

  Object.keys(currencies).forEach((key) => {
    newData[key] = {
      code: currencies[key].CharCode,
      id: currencies[key].ID,
      name: currencies[key].Name,
      nominal: currencies[key].Nominal,
      value: currencies[key].Value,
    };
  });

  return newData;
};
