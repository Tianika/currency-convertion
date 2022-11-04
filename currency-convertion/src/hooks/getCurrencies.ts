import axios from 'axios';
import { useAppDispatch } from '../redux/hooks/hooks';
import { changeError, changeIsLoading, saveCurrencies } from '../redux/reducers/CurrencySlice';
import { adapterResponceCurrencies } from '../utils/common';
import { LoadingState, URL_FOR_REQUEST } from '../utils/constants';

export const useGetCurrencies = () => {
  const dispatch = useAppDispatch();

  dispatch(changeIsLoading(LoadingState.Loading));
  dispatch(changeError(''));

  axios
    .get(URL_FOR_REQUEST)
    .then((data) => {
      const newData = adapterResponceCurrencies(data.data.Valute);

      dispatch(saveCurrencies(newData));
      dispatch(changeIsLoading(LoadingState.Success));
    })
    .catch((error) => {
      dispatch(changeError(error.message));
    });
};
