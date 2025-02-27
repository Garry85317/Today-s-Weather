import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { IGetWeatherParams } from 'api/weather/types';
import useSearchNavigate from 'services/hooks/useSearchNavigate';

const useSearchWeatherForm = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { searchNavigate } = useSearchNavigate();

  const searchCity = searchParams.get('city') || '';

  const searchWeatherInit: IGetWeatherParams = {
    city: ''
  };

  const [initialValues, setInitialValues] =
    useState<IGetWeatherParams>(searchWeatherInit);

  useEffect(() => {
    setInitialValues({ city: searchCity });
  }, [location.key, searchCity]);

  const handleOnSubmit = (values: IGetWeatherParams, { resetForm }: any) => {
    try {
      const params = {
        city: values.city
      };

      searchNavigate(params);
      resetForm();
    } catch (error) {
      console.log('error', error);
    }
  };

  return {
    initialValues,
    handleOnSubmit
  };
};

export default useSearchWeatherForm;
