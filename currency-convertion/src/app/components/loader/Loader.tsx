import { useAppSelector } from '../../../redux/hooks/hooks';
import { isLoadingSelector } from '../../../redux/selectors/currencySelectors';
import { LoadingState } from '../../../utils/constants';

const Loader = () => {
  const isLoading = useAppSelector(isLoadingSelector);

  if (isLoading === LoadingState.Loading) {
    return <div>Идет загрузка курсов. Пожалуйста подождите.</div>;
  }

  return null;
};

export default Loader;
