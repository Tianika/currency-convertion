import { ReactNode, KeyboardEvent, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { ERRORS, PLACEHOLDERS } from '../../../locales/ru';
import { useAppSelector } from '../../../redux/hooks/hooks';
import { currenciesSelector } from '../../../redux/selectors/currencySelectors';
import { CurrenciesMap } from '../../../utils/constants';
import styles from './styles.module.css';

const ConvertionPage = () => {
  const currencies = useAppSelector(currenciesSelector);
  const [conversionResult, setConvertionResult] = useState(0);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit: SubmitHandler<FieldValues> = ({ convertion }) => {
    setConvertionResult(0);
    const values = convertion.split(' ');

    const value = values[0];
    const currency1 = values[1];
    const currency2 = values[3];

    if (value <= 0) {
      setError(ERRORS.valueError);
      return;
    }

    if (!currency2) {
      setError(ERRORS.formatError);
      return;
    }

    if (currencies && !Object.keys(currencies).includes(currency1.toUpperCase())) {
      setError(ERRORS.currencyError);
      return;
    }

    if (currency2 && currency2.toUpperCase() === CurrenciesMap.RUB && currencies && currency1) {
      const currency = currencies[currency1.toUpperCase()];
      const price = currency.value / currency.nominal;

      setConvertionResult(value * price);
      setError('');
    } else {
      setError(ERRORS.formatError);
    }
  };

  const onKeyDown = (keyPress: KeyboardEvent<HTMLDivElement>) => {
    if (keyPress.key === 'Enter') {
      handleSubmit(onSubmit);
    }
  };

  return (
    <>
      <h1 className={styles.title}>Конвертировать валюту</h1>
      <p>Список валют для конвертации в рубли: </p>
      <div>
        {currencies &&
          Object.keys(currencies).map((item) => {
            return (
              <span key={item} className={styles.currency}>
                {item}
              </span>
            );
          })}
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.request}
          type="text"
          placeholder={PLACEHOLDERS.changeCurrency}
          {...register('convertion', {
            required: { value: true, message: ERRORS.inputMessage },
          })}
        />
        <input type="submit" className={styles.button} onKeyDown={onKeyDown} />
      </form>
      {errors.convertion && (
        <div className={styles.error}>{errors.convertion.message as ReactNode}</div>
      )}
      {error && <div className={styles.error}>{error}</div>}
      {conversionResult > 0 && <div>Результат {conversionResult.toFixed(2)} рублей</div>}
    </>
  );
};

export default ConvertionPage;
