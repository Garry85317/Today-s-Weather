import { styled } from '@mui/material';

import SearchWeatherForm from './components/SearchWeatherForm';
import ThemeToggle from './components/ThemeToggle';
import WeatherCard from './components/WeatherCard';

const Weather = () => {
  return (
    <WeatherContainer>
      <ThemeToggle />
      <SearchWeatherForm />
      <WeatherCard />
    </WeatherContainer>
  );
};

export default Weather;

const WeatherContainer = styled('div')(({ theme }) => ({
  backgroundImage: theme.palette.background.default,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start'
}));
