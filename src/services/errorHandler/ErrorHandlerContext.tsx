import { createContext, ReactNode, useMemo, useState } from 'react';

import { IApiError, IApiErrorContextPayload } from './types';

export type IErrorHandlerContextDefaultState = IApiError | undefined;

export const ErrorHandlerContext = createContext<IApiErrorContextPayload>({
  error: undefined,
  setError: () => {}
});

interface Props {
  children: ReactNode;
}

const ErrorHandlerProvider = ({ children }: Props) => {
  const [error, setError] =
    useState<IErrorHandlerContextDefaultState>(undefined);

  const value = useMemo(() => ({ error, setError }), [error]);

  return (
    <ErrorHandlerContext.Provider value={value}>
      {children}
    </ErrorHandlerContext.Provider>
  );
};

export default ErrorHandlerProvider;
