import { Reducer } from '@reduxjs/toolkit';

import { RootState, RootStateKeys } from 'app/providers/store';

type Reducers = Record<RootStateKeys, Reducer<RootState[RootStateKeys]>>;

export interface DynamicReducersLoadOptions {
  reducers: Partial<Reducers>;
  removeAfterUnmount?: boolean;
}

export type UseDynamicReducersLoad = (
  options: DynamicReducersLoadOptions
) => void;
