import React from 'react';
import { Provider } from 'react-redux';

import { createStore, RootState } from '../config/store';

interface Props {
  initialState?: RootState;
}

export const StoreProvider: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  initialState
}) => {
  const store = createStore(initialState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
