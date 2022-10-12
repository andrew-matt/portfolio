import { AlertColor } from '@mui/material/Alert/Alert';

const initialState = {
  open: false,
  title: '',
  severity: '' as AlertColor,
};

export const snackBarReducer = (
  state: InitialStateType = initialState,
  { type, payload }: SnackBarReducerActionTypes = {} as SnackBarReducerActionTypes,
): InitialStateType => {
  switch (type) {
    case 'snackBar/SET-OPEN':
    case 'snackBar/SET-TITLE':
    case 'snackBar/SET-SEVERITY':
      return { ...state, ...payload };
    default: {
      return state;
    }
  }
};

// actions
export const setOpen = (open: boolean) =>
  ({ type: 'snackBar/SET-OPEN', payload: { open } } as const);
export const setTitle = (title: string) =>
  ({ type: 'snackBar/SET-TITLE', payload: { title } } as const);
export const setSeverity = (severity: AlertColor) =>
  ({ type: 'snackBar/SET-SEVERITY', payload: { severity } } as const);

// types
type InitialStateType = typeof initialState;

type setOpenType = ReturnType<typeof setOpen>;
type setTitleType = ReturnType<typeof setTitle>;
type setSeverityType = ReturnType<typeof setSeverity>;

export type SnackBarReducerActionTypes = setOpenType | setTitleType | setSeverityType;
