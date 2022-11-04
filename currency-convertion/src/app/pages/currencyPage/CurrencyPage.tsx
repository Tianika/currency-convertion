import { useAppSelector } from '../../../redux/hooks/hooks';
import {
  baseCurrencySelector,
  currenciesSelector,
} from '../../../redux/selectors/currencySelectors';
import { CurrenciesMap } from '../../../utils/constants';
import ChangeCurrency from '../../components/changeCurrency/ChangeCurrency';
import Currency from '../../components/currency/Currency';
import styles from './styles.module.css';

const CurrencyPage = () => {
  const currency = useAppSelector(baseCurrencySelector);
  const currencies = useAppSelector(currenciesSelector);

  const viewCurrencies = () => {
    if (currencies && Object.values(currencies).length > 0) {
      const ratio = currency === CurrenciesMap.RUB ? 1 : currencies[CurrenciesMap.USD].value;

      return Object.values(currencies).map(({ id, name, nominal, code, value }) => {
        return (
          <Currency
            key={id}
            name={name}
            nominal={nominal}
            code={code}
            value={value / ratio}
            currency={currency}
          />
        );
      });
    }

    return null;
  };

  return (
    <>
      <h1 className={styles.title}>Курс валют</h1>
      <div>Базовая валюта: {currency}</div>
      <ChangeCurrency />
      <div className={styles.currenciesContainer}>{viewCurrencies()}</div>
    </>
  );
};

export default CurrencyPage;
