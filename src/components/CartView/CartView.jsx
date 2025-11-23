import './CartView.css';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import CartViewDetail from '../CartViewDetail/CartViewDetail';

const CartView = () => {
    const context = useContext(CartContext);

    return (
        <div>
            <span>Mi carrito</span>
            <div className='cart-items'>
                {context.cartValue?.map((itemCart) => <CartViewDetail key={itemCart.id} itemCart={itemCart} context={context} />)}
                
            </div>
            <Link className="btn btn-dark" to="/products">Visualizar Productos</Link>
        </div>

    );
};

export default CartView;