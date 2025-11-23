import { useContext } from "react";
import EmptyCart from "../EmptyCart/EmptyCart";
import { CartContext } from "../../context/CartContext";
import CartView from "../CartView/CartView";

const CartContainer = () => {
    const { cartValue } = useContext(CartContext)
    return (
        <>{
            cartValue && cartValue.length > 0 ?
                <CartView /> :
                <EmptyCart />
        }
        </>
    );
};

export default CartContainer;