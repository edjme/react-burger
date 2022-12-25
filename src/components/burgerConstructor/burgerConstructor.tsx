import { FC } from "react";
import { ConstructorItems } from "../constructorItems/constructorItems";
import { OrderTotal } from "../orderTotal/orderTotal";
import burgerConstructorStyles from "./burgerConstructor.module.css";

export const BurgerConstructor: FC = () => {
  return (
    <section className={`${burgerConstructorStyles.main} mt-25`}>
      <ConstructorItems />
      <OrderTotal />
    </section>
  );
};
