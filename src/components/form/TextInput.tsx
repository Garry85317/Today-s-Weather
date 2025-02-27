import { KeyboardEvent, memo, useMemo } from 'react';
import {
  alpha,
  FormControl,
  StandardTextFieldProps,
  styled,
  TextField
} from '@mui/material';
import { useField, useFormikContext } from 'formik';

interface Props extends StandardTextFieldProps {
  label?: string;
  name: string;
  placeholder?: string;
  customClass?: string;
}

const TextInput = ({ name, customClass = undefined, ...rest }: Props) => {
  const [field, meta] = useField(name);
  const { handleChange, handleBlur } = useFormikContext();

  const isInvalid = useMemo(
    () =>
      (meta.touched || (meta.touched && name.includes('.'))) && !!meta.error,
    [meta.error, meta.touched, name]
  );

  const handleTrimWhiteSpace = (e: any) => {
    e.target.value = e.target.value.trim();
    handleBlur(e);
    handleChange(e);
  };

  const handleEnterPress = (e: KeyboardEvent<any>) => {
    // for when form press enter input does not trim white space
    if (e.key === 'Enter') {
      handleTrimWhiteSpace(e);
    }
  };

  return (
    <FormControl
      component="fieldset"
      fullWidth
      className={`gap-1 ${customClass}`}
    >
      <StyledTextField
        {...rest}
        {...field}
        name={name}
        onChange={handleChange}
        onBlur={handleTrimWhiteSpace}
        onKeyDown={handleEnterPress}
        error={isInvalid}
        helperText={isInvalid ? meta.error : ''}
        fullWidth
        variant="filled"
      />
    </FormControl>
  );
};

export default memo(TextInput);

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiFormLabel-root': {
    color: '#666666'
  },
  '& .MuiFormLabel-root.Mui-focused': {
    color: '#666666'
  },
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderRadius: 15,
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow'
    ]),
    '&.Mui-focused': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`
    },
    '&::before': {
      borderBottom: 'none'
    },
    '&::after': {
      borderBottom: 'none'
    }
  }
}));
