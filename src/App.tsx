import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { PersistGate } from 'redux-persist/integration/react';

import queryClient from './api/queryClient';
import RouteEntry from './routes/routes';
import ErrorHandlerProvider from './services/errorHandler';
import useStore from './services/reducers/store';

const App = () => {
  const { store, persistor } = useStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ErrorHandlerProvider>
            <BrowserRouter>
              <RouteEntry />
            </BrowserRouter>
          </ErrorHandlerProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
