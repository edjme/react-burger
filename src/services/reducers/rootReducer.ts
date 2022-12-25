import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingridientsReducer/ingridientsReducer";
import { orderReducer } from "./orderReducer/orderReducer";
import { currentIngredientReducer } from "./currentIngridientReducer/currentIngridientReducer";
import { constructorReducer } from "./constructorReducer/constructorReducer";
import { userReducer } from "./authReducer/authReducer";
import { forgotPasswordReducer } from "./forgotPasswordReducer/forgotPasswordReducer";
import { resetPasswordReducer } from "./resetPasswordReducer/resetPasswordReducer";
import { wsReducer } from "./wsReducer";

export const rootReducer = combineReducers({
  ingridients: ingredientsReducer,
  order: orderReducer,
  currentIngridient: currentIngredientReducer,
  constructorItems: constructorReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  ws: wsReducer,
});
