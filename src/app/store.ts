import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { appReducer, AppReducerActionTypes } from 'app/app-reducer';
import {
  modalReducer,
  ModalReducerActionTypes,
} from 'common/components/modal/modal-reducer';
import {
  snackBarReducer,
  SnackBarReducerActionTypes,
} from 'common/components/snackbar/snackBar-reducer';

const rootReducer = combineReducers({
  app: appReducer,
  modal: modalReducer,
  snackBar: snackBarReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

// types
export type AppRootStateType = ReturnType<typeof rootReducer>;

export type AppActionsType =
  | AppReducerActionTypes
  | ModalReducerActionTypes
  | SnackBarReducerActionTypes;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AppActionsType
>;

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>;

// @ts-ignore
window.store = store;
