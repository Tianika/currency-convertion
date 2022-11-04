export const RoutersMap = {
  currency: '/',
  convertion: '/convertion',
};

export const BASE_LANGUAGE = 'ru-RU';

export const CurrenciesMap = {
  RUB: 'RUB',
  USD: 'USD',
};

export enum LoadingState {
  Initial = 'Initial',
  Loading = 'loading',
  Success = 'success',
  Error = 'Error',
}

export const URL_FOR_REQUEST = 'https://www.cbr-xml-daily.ru/daily_json.js';
