const initialState = {
  show: false,
};

export const modalReducer = (
  state: InitialStateType = initialState,
  { type, payload }: ModalReducerActionTypes = {} as ModalReducerActionTypes,
): InitialStateType => {
  switch (type) {
    case 'modal/SET-SHOW':
      return { ...state, ...payload };
    default: {
      return state;
    }
  }
};

// actions
export const setShow = (show: boolean) =>
  ({ type: 'modal/SET-SHOW', payload: { show } } as const);

// types
type InitialStateType = typeof initialState;

type setShowType = ReturnType<typeof setShow>;

export type ModalReducerActionTypes = setShowType;
