import './EmptyCart.css';
import PageContainer from "../PageContainer/PageContainer";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const EmptyCart = () => {
    return (
        <>
            <PageContainer
                title="Carrito vacío"
                subtitle="Tu carrito no contiene productos"
                imageSrc="https://i.postimg.cc/3wZkZ2Kv/empty-cart.jpg"
            />
            <div className="container-link">
                <Button className="btn btn-dark" as={Link} to="/products">Visualizar Productos</Button>
            </div>
        </>
    );
};

export default EmptyCart;