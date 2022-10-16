import PropTypes from "prop-types";
import burgerConstructorStyles from "./burgerConstructor.module.css";
import { cardPropTypes } from "../../utils/prop-types";
import { ConstructorItem } from "../constructorItem/ConstructorItem";
import { ConstructorItems } from "../ConstructorItems/ConstructorItems";
import { OrderTotal } from "../OrderTotal/OrderTotal";

ConstructorItem.propTypes = {
  cardData: cardPropTypes.isRequired,
  index: PropTypes.number.isRequired,
};

const BurgerConstructor = () => {
  return (
    <section className={`${burgerConstructorStyles.main} mt-25`}>
      <ConstructorItems />
      <OrderTotal />
    </section>
  );
};

export default BurgerConstructor;
