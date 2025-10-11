import { LuShoppingCart } from "react-icons/lu";
import Badge from 'react-bootstrap/Badge';
import './CartWidget.css';

const CartWidget = (props) => {
  return (
    <div className="cart-widget">
      <LuShoppingCart className="cart-icon" />
      <Badge bg="info" pill className="cart-badge">{props.itemsCount}</Badge>
    </div>
  );
};

export default CartWidget;