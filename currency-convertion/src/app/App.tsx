import { Route, Routes } from 'react-router-dom';
import { RoutersMap } from '../utils/constants';
import Header from './components/header/Header';
import ConvertionPage from './pages/convertionPage/ConvertionPage';
import CurrencyPage from './pages/currencyPage/CurrencyPage';
import { useGetBaseLang } from '../hooks/getBaseLang';
import { useGetCurrencies } from '../hooks/getCurrencies';
import ErrorMessage from './components/errorMessage/ErrorMessage';
import Loader from './components/loader/Loader';
import '../styles/reset.css';
import '../styles/common.css';
import styles from './styles.module.css';

const App = () => {
  useGetBaseLang();
  useGetCurrencies();

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <div className="wrapper">
          <Loader />
          <ErrorMessage />
          <Routes>
            <Route path={RoutersMap.convertion} element={<ConvertionPage />} />
            <Route path={RoutersMap.currency} element={<CurrencyPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
