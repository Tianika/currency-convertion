import { RootState } from '../store/store';

export const baseCurrencySelector = (state: RootState) => state.currency.baseCurrency;

export const currenciesSelector = (state: RootState) => state.currency.currencies;

export const isLoadingSelector = (state: RootState) => state.currency.isLoading;

export const errorSelector = (state: RootState) => state.currency.error;
