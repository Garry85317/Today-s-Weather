import { useDispatch, useSelector } from 'react-redux';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { styled } from '@mui/material';
import { RootState } from 'services/reducers/rootReducer';
import { setTheme } from 'services/reducers/slices/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <ThemeToggleContainer>
      <ThemeToggleButton onClick={() => dispatch(setTheme(!theme))}>
        {theme ? (
          <Brightness7Icon fontSize="large" color="primary" />
        ) : (
          <DarkModeIcon fontSize="large" sx={{ color: 'white' }} />
        )}
      </ThemeToggleButton>
    </ThemeToggleContainer>
  );
};

export default ThemeToggle;

const ThemeToggleContainer = styled('div')(() => ({
  position: 'absolute',
  bottom: '10px',
  right: '10px',
  zIndex: 1000
}));

const ThemeToggleButton = styled('button')(() => ({
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer'
}));
