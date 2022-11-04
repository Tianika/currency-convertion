import { useAppDispatch } from '../redux/hooks/hooks';
import { changeBaseCurrency } from '../redux/reducers/CurrencySlice';
import { BASE_LANGUAGE, CurrenciesMap } from '../utils/constants';

export const useGetBaseLang = () => {
  const dispatch = useAppDispatch();

  const userLang = navigator.language === BASE_LANGUAGE ? CurrenciesMap.RUB : CurrenciesMap.USD;
  dispatch(changeBaseCurrency(userLang));
};
