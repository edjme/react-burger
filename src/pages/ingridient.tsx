import { FC } from "react";
import { IngredientDetails } from "../components/ingridientDetails/ingridientDetails";
import styles from "./style.module.css";

export const IngredientPage: FC = () => {
  return (
    <div className={styles.modalPage}>
      <h1 className="text text_type_main-large mt-30">Детали ингредиента</h1>
      <IngredientDetails />
    </div>
  );
};
