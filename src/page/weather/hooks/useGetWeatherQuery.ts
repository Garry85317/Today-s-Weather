import { useLocation, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { apiGetWeather } from 'api/weather';
import { IGetWeatherResponse } from 'api/weather/types';

const useGetWeatherQuery = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const city = searchParams.get('city') || '';

  const query = useQuery<IGetWeatherResponse>({
    queryKey: ['weather', location.key, city],
    queryFn: async () => {
      const response = await apiGetWeather({ city: city || 'singapore' });
      return response.data;
    }
  });

  const loading = Boolean(query.isLoading || query.isFetching);

  return { loading, ...query };
};

export default useGetWeatherQuery;
