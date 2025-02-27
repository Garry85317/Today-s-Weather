import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import Weather from 'page/weather';
import { RootState } from 'services/reducers/rootReducer';
import { darkTheme, lightTheme } from 'utils/theme';

const RouteEntry: FC = () => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Routes>
        <Route path="/" element={<Weather />} />
      </Routes>
    </ThemeProvider>
  );
};

export default RouteEntry;
