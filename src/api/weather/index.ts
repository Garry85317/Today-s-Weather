import apiRequest from 'api/apiRequest';
import { API_KEY } from 'env';

import { IGetWeatherParams, IGetWeatherResponse } from './types';

export const apiGetWeather = async (params: IGetWeatherParams | null) => {
  const response = await apiRequest.get<IGetWeatherResponse>(
    '/data/2.5/weather',
    {
      params: {
        units: 'metric',
        q: params?.city,
        appid: API_KEY
      }
    }
  );
  return response;
};
