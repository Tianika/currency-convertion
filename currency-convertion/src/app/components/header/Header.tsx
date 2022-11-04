import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RoutersMap } from '../../../utils/constants';
import styles from './styles.module.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className="wrapper">
        <ul className={styles.list}>
          <li
            className={`${styles.link} ${
              location.pathname === RoutersMap.currency ? styles.active : ''
            }`}
          >
            <Link to={RoutersMap.currency}>Курс валют</Link>
          </li>
          <li
            className={`${styles.link} ${
              location.pathname === RoutersMap.convertion ? styles.active : ''
            }`}
          >
            <Link to={RoutersMap.convertion}>Конвертер</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
