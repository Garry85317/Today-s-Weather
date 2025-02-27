import { CustomSwal } from 'components/custom-swal';

const showSwalError = (text: string) => {
  return CustomSwal.fire({
    icon: 'error',
    text
  });
};

const showSwalSuccess = (text: string) => {
  return CustomSwal.fire({
    icon: 'success',
    text
  });
};

export { showSwalError, showSwalSuccess };
