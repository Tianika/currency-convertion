import styles from './styles.module.css';

type CurrencyProps = {
  name: string;
  nominal: number;
  code: string;
  value: number;
  currency: string;
};

const Currency = ({ name, nominal, code, value, currency }: CurrencyProps) => {
  return (
    <div className={styles.container}>
      <p>{name}</p>
      <p>
        {nominal} {code} = {value.toFixed(2)} {currency}{' '}
      </p>
    </div>
  );
};

export default Currency;
