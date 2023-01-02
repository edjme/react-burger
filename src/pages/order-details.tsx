import { OrderDetails } from "../components/orderDetails/orderDetails";
import styles from "./style.module.css";

export const OrderDetailsPage = () => {
  return (
    <div className={styles.modalPage}>
      <OrderDetails />
    </div>
  );
};
