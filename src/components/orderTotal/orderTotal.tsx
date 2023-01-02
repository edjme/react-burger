import { useState, useMemo, FC } from "react";
import { Redirect, useHistory } from "react-router-dom";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "../../services/types";
import { Modal } from "../modal/modal";
import { OrderDetails } from "../orderDetails/orderDetails";
import { postOrder, RESET_ORDER } from "../../services/actions/order";
import { Loader } from "../loader/loader";
import orderTotalStyles from "./orderTotal.module.css";

export const OrderTotal: FC = () => {
  const { constructorItems, bun } = useSelector(
    (store) => store.constructorItems
  );
  const { order, orderRequest } = useSelector((store) => store.order);
  const { isAuth } = useSelector((store) => store.user);
  const burgerItemsId = [bun, bun, ...constructorItems].filter((el) => el?._id);

  const [modalActive, setModalActive] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const openModal = () => {
    if (isAuth) {
      setModalActive(true);
      dispatch(postOrder(burgerItemsId));
    } else {
      <Redirect to={{ pathname: "/login" }} />;
    }
  };

  const closeModal = () => {
    setModalActive(false);
    dispatch({
      type: RESET_ORDER,
    });
  };

  const modalOrder = (
    <Modal closing={closeModal} showModal={true}>
      <OrderDetails />
    </Modal>
  );

  const handlerOrder = () => {
    if (isAuth) {
      openModal();
    } else {
      history.replace({ pathname: "login" });
    }
  };

  const total = useMemo(() => {
    const bunPrice = bun ? bun.price * 2 : 0;

    return (
      constructorItems.reduce((acc, item) => acc + item.price, 0) + bunPrice
    );
  }, [constructorItems, bun]);

  return (
    <>
      <div className={`${orderTotalStyles.order} mt-10`}>
        <div className={`${orderTotalStyles.price} mr-10`}>
          <span className="text text_type_digits-medium mr-4">{total}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          onClick={handlerOrder}
          disabled={bun && constructorItems.length ? false : true}
        >
          Оформить заказ
        </Button>
      </div>
      {orderRequest && <Loader />}
      {order && modalActive && modalOrder}
    </>
  );
};
