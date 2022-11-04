import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '../../utils/constants';
import { CurrencyType } from '../../utils/types';

type CurrencyState = {
  baseCurrency: string;
  currencies: Record<string, CurrencyType> | null;
  isLoading: LoadingState;
  error: string;
};

const initialState: CurrencyState = {
  baseCurrency: '',
  currencies: null,
  isLoading: LoadingState.Initial,
  error: '',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    changeBaseCurrency(state, action: PayloadAction<string>) {
      state.baseCurrency = action.payload;
    },
    saveCurrencies(state, action: PayloadAction<Record<string, CurrencyType>>) {
      state.currencies = action.payload;
    },
    changeIsLoading(state, action: PayloadAction<LoadingState>) {
      state.isLoading = action.payload;
    },
    changeError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const currencyReducer = currencySlice.reducer;
export const { changeBaseCurrency, saveCurrencies, changeIsLoading, changeError } =
  currencySlice.actions;
