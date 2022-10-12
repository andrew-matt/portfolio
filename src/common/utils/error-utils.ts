import axios, { AxiosError } from 'axios';

import { setError } from 'app-reducer';
import { AppDispatch } from 'store';

export const handleServerNetworkError = (error: unknown, dispatch: AppDispatch): void => {
  const err = error as Error | AxiosError<{ error: string }>;

  if (axios.isAxiosError(err)) {
    dispatch(setError(err.message));
  }
};
