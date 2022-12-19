import { useEffect } from "react";
import BurgerIngridients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";

import AppHeader from "../appHeader/appHeader";
import appStyles from "./app.module.css";

import { useDispatch } from "react-redux";
import { getIngridients } from "../../services/actions/ingridients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngridients());
  }, [dispatch]);

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main className={appStyles.main}>
          <BurgerIngridients />
          <BurgerConstructor />
        </main>
      </DndProvider>
    </div>
  );
};

export default App;
