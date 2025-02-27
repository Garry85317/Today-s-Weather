import { Dispatch, SetStateAction } from 'react';

export interface IApiError {
  errorCode: string;
  errMsg: string;
}

export type IApiErrorContextPayload = {
  error: IApiError | undefined;
  setError: Dispatch<SetStateAction<IApiError | undefined>>;
};
