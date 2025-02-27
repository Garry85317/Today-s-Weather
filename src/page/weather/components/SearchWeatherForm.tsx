import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material';
import TextInput from 'components/form/TextInput';
import { Form, Formik } from 'formik';
import { isMobile } from 'lib/platform';

import useSearchWeatherForm from '../hooks/useSearchWeatherForm';

const SearchWeatherForm = () => {
  const { initialValues, handleOnSubmit } = useSearchWeatherForm();

  return (
    <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
      {({ handleSubmit }) => (
        <SearchForm
          onSubmit={handleSubmit}
          className="flex gap-2 w-[70vw] mt-5 mb-[100px]"
        >
          <TextInput label="Country" name="city" />
          <SearchButton type="submit">
            <SearchIcon fontSize="large" />
          </SearchButton>
        </SearchForm>
      )}
    </Formik>
  );
};

export default SearchWeatherForm;

const SearchForm = styled(Form)(() => ({
  display: 'flex',
  gap: '10px',
  width: isMobile() ? '90vw' : '700px',
  marginTop: '20px',
  marginBottom: isMobile() ? '80px' : '100px'
}));

const SearchButton = styled('button')(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.background.paper : '#6C40B5',
  color: 'white',
  borderRadius: '15px',
  padding: '10px',
  border: 'none',
  cursor: 'pointer'
}));
