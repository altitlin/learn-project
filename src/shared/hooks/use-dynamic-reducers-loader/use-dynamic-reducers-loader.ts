import React from 'react';
import { useStore } from 'react-redux';

import { StoreWithReducerManager, RootStateKeys } from 'app/providers/store';

import { UseDynamicReducersLoad } from './types';

/**
 * Allow to add dynamically reducers as needed
 * @param options - object with settings
 * @param options.reducers - an key-value pair where key is name reducer and value is reducer function
 * @param options.removeAfterUnmount - removes previously added reducers after unmount of the component, by default true
 * @returns void
 */
export const useDynamicReducersLoad: UseDynamicReducersLoad = ({
  reducers,
  removeAfterUnmount = true,
}) => {
  const store = useStore() as StoreWithReducerManager;

  React.useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]) => {
      const keyToType = key as RootStateKeys;

      store.reducerManager.add(keyToType, reducer);
    });

    return () => {
      if (removeAfterUnmount) {
        Object.keys(reducers).forEach((key) => {
          const keyToType = key as RootStateKeys;

          store.reducerManager.remove(keyToType);
        });
      }
    };
  }, []);
};
