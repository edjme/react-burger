import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";

import { store } from "../store";
import { TIngredientsActions } from "../actions/ingridients";
import { TModalActions } from "../actions/currentIngridient";
import { TOrderActions } from "../actions/order";
import { TConstructorActions } from "../actions/constructor";
import {
  TForgotPasswordActions,
  TResetPasswordActions,
} from "../actions/password";
import { TAuthActions } from "../actions/auth";
import { TWSActions } from "../actions/wsActions";

export type RootState = ReturnType<typeof store.getState>;

type TApplicationActions =
  | TIngredientsActions
  | TModalActions
  | TOrderActions
  | TConstructorActions
  | TForgotPasswordActions
  | TResetPasswordActions
  | TAuthActions
  | TWSActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type AppDispatch = typeof store.dispatch;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();
