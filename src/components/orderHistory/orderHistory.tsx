import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "../../services/types";
import { CardOrder } from "../cardOrder/cardOrder";
import orderHistoryStyles from "./orderHistory.module.css";

export const OrderHistory: FC = () => {
  const location = useLocation();
  const { orders } = useSelector((store) => store.ws);

  return (
    <ul className={`${orderHistoryStyles.cardList} custom-scroll`}>
      {orders
        ?.map((item) => (
          <Link
            key={item._id}
            className={orderHistoryStyles.link}
            to={{
              pathname: `/profile/orders/${item._id}`,
              state: { background: location },
            }}
          >
            <CardOrder card={item} />
          </Link>
        ))
        .reverse()}
    </ul>
  );
};
