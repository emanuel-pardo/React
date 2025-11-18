import { LuShoppingCart } from "react-icons/lu";
import Badge from 'react-bootstrap/Badge';
import './CartWidget.css';
import { useContext } from "react";
import {CartContext} from "../../context/CartContext";

const CartWidget = () => {
  const {getTotalQuantity} = useContext(CartContext);
  const totalQuantity = getTotalQuantity();
  return (
    <div className="cart-widget">
      <LuShoppingCart className="cart-icon" />
      <Badge bg="info" pill className="cart-badge">{totalQuantity}</Badge>
    </div>
  );
};

export default CartWidget;