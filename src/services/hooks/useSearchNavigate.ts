import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { removeEmptyObjectValue } from 'utils/formatter';

const useSearchNavigate = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchNavigate = (params: object) => {
    const finalValue = removeEmptyObjectValue(params);

    navigate({
      pathname: location.pathname,
      search: createSearchParams(finalValue as {}).toString()
    });
  };

  return { searchNavigate };
};

export default useSearchNavigate;
