import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { changeBaseCurrency } from '../../../redux/reducers/CurrencySlice';
import { baseCurrencySelector } from '../../../redux/selectors/currencySelectors';
import { CurrenciesMap } from '../../../utils/constants';
import styles from './styles.module.css';

const ChangeCurrency = () => {
  const dispatch = useAppDispatch();
  const currency = useAppSelector(baseCurrencySelector);

  const changeCurrencyHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeBaseCurrency(event.target.value));
  };

  return (
    <label htmlFor="change-currency">
      Поменять базовую валюту
      <select
        className={styles.select}
        defaultValue={currency}
        onChange={changeCurrencyHandler}
        id="change-currency"
      >
        <option value={CurrenciesMap.RUB}>{CurrenciesMap.RUB}</option>
        <option value={CurrenciesMap.USD}>{CurrenciesMap.USD}</option>
      </select>
    </label>
  );
};

export default ChangeCurrency;
