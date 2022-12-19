import { combineReducers } from "redux";
import { ingridientsReducer } from "./ingridientsReducer/ingridientsReducer";
import { orderReducer } from "./orderReducer/orderReducer";
import { constructorReducer } from "./constructorReducer/constructorReducer";
import { currentIngridientReducer } from "./currentIngridientReducer/currentIngridientReducer";

export const rootReducer = combineReducers({
  ingridients: ingridientsReducer,
  order: orderReducer,
  currentIngridient: currentIngridientReducer,
  constructorItems: constructorReducer,
});
