import axios from 'axios';

import { AppThunk } from 'app/store';
import { setShow } from 'common/components/modal/modal-reducer';
import { setOpen } from 'common/components/snackbar/snackBar-reducer';
import { handleServerNetworkError } from 'common/utils/error-utils';

const initialState = {
  error: null as string | null,
  sendingMessageStatus: false,
};

export const appReducer = (
  state: InitialStateType = initialState,
  { type, payload }: AppReducerActionTypes = {} as AppReducerActionTypes,
): InitialStateType => {
  switch (type) {
    case 'app/SET-ERROR':
    case 'app/SET-SENDING-MESSAGE-STATUS':
      return { ...state, ...payload };
    default: {
      return state;
    }
  }
};

// actions
export const setError = (error: string) =>
  ({ type: 'app/SET-ERROR', payload: { error } } as const);

export const setSendingMessageStatus = (sendingMessageStatus: boolean) =>
  ({
    type: 'app/SET-SENDING-MESSAGE-STATUS',
    payload: { sendingMessageStatus },
  } as const);

// thunks
export const sendMessage =
  (values: SubmitFormValuesType): AppThunk =>
  async dispatch => {
    try {
      dispatch(setSendingMessageStatus(true));
      await axios.post('https://smtp-nodejs-server-39586.herokuapp.com/sendMessage', {
        values,
      });
      dispatch(setOpen(true));
    } catch (error) {
      handleServerNetworkError(error, dispatch);
      dispatch(setOpen(true));
    } finally {
      dispatch(setSendingMessageStatus(false));
      dispatch(setShow(false));
    }
  };

// types
type InitialStateType = typeof initialState;

type setErrorType = ReturnType<typeof setError>;
type setSendingMessageStatusType = ReturnType<typeof setSendingMessageStatus>;

export type AppReducerActionTypes = setErrorType | setSendingMessageStatusType;

export type SubmitFormValuesType = {
  name: string;
  project?: string;
  email: string;
  message: string;
};
