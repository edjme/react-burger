import { useState, useMemo } from "react";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import burgerConstructorStyles from "../burgerConstructor/burgerConstructor.module.css";
import OrderDetails from "../orderDetails/orderDetails";
import { useSelector, useDispatch } from "react-redux";
import { postOrder, RESET_ORDER } from "../../services/actions/order";

export const OrderTotal = () => {
  const { constructorItems, bun } = useSelector(
    (store) => store.constructorItems
  );
  const { order, orderRequest } = useSelector((store) => store.order);
  // const [modalActive, setModalActive] = useState(false);
  const orderItems = [bun, ...constructorItems, bun];
  const dispatch = useDispatch();

  const openModal = () => {
    // setModalActive(true);
    dispatch(postOrder(orderItems)); // отправляем данные заказа
  };

  const closeModal = () => {
    // setModalActive(false);
    dispatch({
      type: RESET_ORDER,
    });
  };

  const modalOrder = (
    <Modal closing={closeModal}>
      <OrderDetails />
    </Modal>
  );

  const total = useMemo(() => {
    const bunPrice = bun ? bun.price * 2 : 0;

    return (
      constructorItems.reduce((acc, item) => acc + item.price, 0) + bunPrice
    );
  }, [constructorItems, bun]);

  return (
    <>
      <div className={`${burgerConstructorStyles.order} mt-10`}>
        <div className={`${burgerConstructorStyles.price} mr-10`}>
          <span className="text text_type_digits-medium mr-4">{total}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          type="primary"
          size="large"
          onClick={openModal}
          // делаем неактивной кнопку без булки и ингредиентов
          disabled={bun && constructorItems.length ? false : true}
        >
          Оформить заказ
        </Button>
      </div>
      {orderRequest}
      
      {order && modalOrder}
    </>
  );
};
// {order && modalActive && modalOrder}