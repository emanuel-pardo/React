import './CartWidget.css';
import { LuShoppingCart } from "react-icons/lu";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  const totalQuantity = getTotalQuantity();
  return (
    <Link to="/cart" className="cart-link">
      <div className="cart-widget">
        <LuShoppingCart className="cart-icon" />
        <Badge bg="info" pill className="cart-badge">{totalQuantity}</Badge>
      </div>
    </Link>
  );
};

export default CartWidget;