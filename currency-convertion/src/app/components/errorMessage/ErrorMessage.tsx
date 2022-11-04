import { useAppSelector } from '../../../redux/hooks/hooks';
import { errorSelector } from '../../../redux/selectors/currencySelectors';

const ErrorMessage = () => {
  const error = useAppSelector(errorSelector);

  if (error) {
    return (
      <div>
        <p>Произошла ошибка загрузки курсов валют. Пожалуйста, перезагрузите страницу.</p>
        <p>{error}</p>
      </div>
    );
  }

  return null;
};

export default ErrorMessage;
