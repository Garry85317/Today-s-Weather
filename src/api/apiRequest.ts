import axios, { AxiosError, AxiosResponse } from 'axios';
import { CustomSwal } from 'components/custom-swal';

// import { CustomSwal } from 'components/custom-swal';

interface IApiErrorResponse {
  status: number;
  error: string;
  message: string;
  errors?: any;
}

const apiRequest = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

const handleResponseSuccess = (response: AxiosResponse) => {
  return response;
};

const handleResponseError = (error: AxiosError<IApiErrorResponse>) => {
  if (axios.isAxiosError(error)) {
    const { response } = error;

    if (response?.status === 404) {
      if (!CustomSwal.isVisible()) {
        CustomSwal.fire({
          text: 'City not found',
          icon: 'warning',
          allowOutsideClick: false
        });
      }
    }

    if (response) {
      return Promise.reject({
        status: response.data.status,
        error: response.data.error,
        message: response.data.message ?? response.data.error,
        ...(response.data.errors && { errors: response.data.errors })
      });
    }
    return Promise.reject({
      status: error.code,
      error: error.name,
      message: error.message
    });
  }

  return Promise.reject({
    message: 'Unknown error'
  });
};

apiRequest.interceptors.response.use(
  handleResponseSuccess,
  handleResponseError
);

export default apiRequest;
