import { Dispatch, SetStateAction } from 'react';

export interface IContextValue<TState> {
  state: TState;
  setState: Dispatch<SetStateAction<TState>>;
}
