import './EmptyCart.css';
import PageContainer from "../PageContainer/PageContainer";
import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (
        <>
            <PageContainer
                title="Carrito vacío"
                subtitle="Tu carrito no contiene productos"
                imageSrc="https://i.postimg.cc/3wZkZ2Kv/empty-cart.jpg"
            />
            <div className="container-link">
                <Link className="btn btn-dark" to="/products">Visualizar Productos</Link>
            </div>
        </>
    );
};

export default EmptyCart;