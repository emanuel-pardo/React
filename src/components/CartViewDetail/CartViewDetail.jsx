
import './CartViewDetail.css';

const CartViewDetail = ({ itemCart, context }) => {

    return (
        <div className='cart-detail-container'>
            <img src={itemCart?.img} alt={itemCart?.code} className="cart-detail-img" />

            <div className="cart-detail-info">
                <h1 className="cart-detail-title">{itemCart?.name?.toUpperCase() ?? ""}</h1>
                <h2 className="cart-detail-subtitle">{itemCart?.category?.toUpperCase() ?? ""}</h2>
                <hr className="cart-divider" />
                <div className="cart-price-box">
                    <span>Cantidad: <b>{itemCart.quantity}</b></span>
                    <span>Precio unit.: <b>${itemCart.price}</b></span>
                    <span className="cart-price-total">
                        Total: <b>${itemCart.price * itemCart.quantity}</b>
                    </span>
                </div>
            </div>
        </div>

    );
};

export default CartViewDetail;