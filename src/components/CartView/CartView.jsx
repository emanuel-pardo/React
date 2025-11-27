import './CartView.css';
import { MdRemoveShoppingCart } from "react-icons/md";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartViewDetail from '../CartViewDetail/CartViewDetail';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useConfirm } from '../../hooks/useConfirm';

const CartView = () => {
    const context = useContext(CartContext);
    const confirm = useConfirm();


    const handleClearCart = async () => {
        const result = await confirm({ title: 'Vaciar carrito', text: 'Desea continuar?' });
        if (result)
            context.clearAll();
    };

    return (
        <div className="cart-view-container">
            <span className="cart-title">Detalle de mi carrito</span>
            <div className="cart-items">
                {context.cartValue?.map((itemCart) => (<CartViewDetail key={itemCart.id} itemCart={itemCart} context={context} />))}
            </div>
            <span className="cart-total">Total: ${context.getTotalCartValue()}</span>
            <div className="cart-buttons">
                <Button className="btn btn-danger" onClick={handleClearCart}>
                    <MdRemoveShoppingCart className="icon" />
                    Vaciar carrito
                </Button>
                <Link className="btn btn-success" to="/checkout">Finalizar compra</Link>
            </div>
        </div>
    );
};

export default CartView;