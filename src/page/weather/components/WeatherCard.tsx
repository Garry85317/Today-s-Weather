/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material';
import { IGetWeatherResponse } from 'api/weather/types';
import { isMobile } from 'lib/platform';
import { setHistory } from 'services/reducers/slices/historySlice';
import { formatDateTime, formatTemperature } from 'utils/formatter';

import useGetWeatherQuery from '../hooks/useGetWeatherQuery';
import History from './History';

const WeatherCard = () => {
  const dispatch = useDispatch();
  const { data } = useGetWeatherQuery();
  const [lastValidData, setLastValidData] =
    useState<IGetWeatherResponse | null>(null);

  useEffect(() => {
    if (data) {
      setLastValidData(data);
      dispatch(
        setHistory({
          city: data.name,
          country: data.sys.country,
          time: formatDateTime(data.dt * 1000),
          rid: crypto.randomUUID()
        })
      );
    }
  }, [data, dispatch]);

  const displayData = lastValidData || data;

  const renderWeatherInfo = () => {
    if (isMobile()) {
      return (
        <WeatherInfo>
          <Location>
            {displayData?.sys.country} ,{displayData?.name}
          </Location>
          <WeatherInfoMobileRight>
            <div>{displayData?.weather[0].main}</div>
            <div>Humidity: {displayData?.main.humidity}%</div>
            <div>{formatDateTime((displayData?.dt || 0) * 1000 || '')}</div>
          </WeatherInfoMobileRight>
        </WeatherInfo>
      );
    }

    return (
      <WeatherInfo>
        <Location>
          {displayData?.sys.country} ,{displayData?.name}
        </Location>
        <div>{formatDateTime((displayData?.dt || 0) * 1000 || '')}</div>
        <div>Humidity: {displayData?.main.humidity}%</div>
        <div>{displayData?.weather[0].main}</div>
      </WeatherInfo>
    );
  };

  return (
    <WeatherCardContainer>
      <WeatherIcon
        src={
          displayData?.weather[0].icon === '04d'
            ? '/img/cloud.png'
            : '/img/sun.png'
        }
        alt="weather-icon"
      />

      <WeatherTitle>Today's Weather</WeatherTitle>

      <Temperature>
        {formatTemperature(displayData?.main.temp || 0)}
      </Temperature>

      <TemperatureUnit>
        H: {formatTemperature(displayData?.main.temp_max || 0)} L:{' '}
        {formatTemperature(displayData?.main.temp_min || 0)}
      </TemperatureUnit>

      {renderWeatherInfo()}

      <History />
    </WeatherCardContainer>
  );
};

export default WeatherCard;

const WeatherCardContainer = styled('div')(({ theme }) => ({
  width: isMobile() ? '90vw' : '700px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '30px',
  padding: '30px',
  position: 'relative'
}));

const WeatherIcon = styled('img')(() => ({
  width: isMobile() ? '180px' : '300px',
  height: isMobile() ? '180px' : '300px',
  position: 'absolute',
  top: isMobile() ? '-60px' : '-100px',
  right: '0'
}));

const WeatherTitle = styled('div')(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? 'white' : 'black'
}));

const Temperature = styled('div')(({ theme }) => ({
  fontSize: isMobile() ? '60px' : '81px',
  fontWeight: 'bold',
  color: theme.palette.text.primary
}));

const TemperatureUnit = styled('div')(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? 'white' : 'black'
}));

const WeatherInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  color: theme.palette.text.secondary
}));

const Location = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 'bold'
}));

const WeatherInfoMobileRight = styled('div')(() => ({
  position: 'absolute',
  top: isMobile() ? '100px' : '130px',
  right: '50px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '10px'
}));
