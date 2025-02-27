import React, { FC, useContext, useEffect } from 'react';

import { ErrorHandlerContext } from './ErrorHandlerContext';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const ErrorOutlet: FC<Props> = ({ ...rest }) => {
  const { error, setError } = useContext(ErrorHandlerContext);

  useEffect(() => {
    return () => setError(undefined);
  }, [setError]);

  return error ? (
    <div
      style={{
        color: 'red',
        textAlign: 'center',
        marginTop: '0.5rem',
        marginBottom: '0.5rem'
        // fontSize: 12
      }}
      {...rest}
    >
      {error?.errMsg}
    </div>
  ) : null;
};

export const useErrorOutlet = () => {
  const errorCtx = useContext(ErrorHandlerContext);
  return errorCtx.setError;
};
