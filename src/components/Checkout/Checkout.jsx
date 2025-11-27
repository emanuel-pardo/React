import './Checkout.css';
import { Button, Form } from "react-bootstrap";
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import EmptyCart from "../EmptyCart/EmptyCart";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import { saveOrder } from "../../service/orderService";
import FinishedProcessBuying from '../FinishedProcessBuying/FinishedProcessBuying';

function Checkout() {
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");
    const [errorCart, setErrorCart] = useState(false);
    const [loader, setLoader] = useState(false);
    const context = useContext(CartContext);
    const [infoBuyerData, setInfoBuyerData] = useState({
        nombre: "",
        email: "",
        identificacion: "",
        celular: "",
        direccion: ""
    });

    useEffect(() => {
        if (!context.cartValue || context.cartValue.length === 0) {
            setErrorCart(true);
        } else {
            setErrorCart(false);
        }
    }, [context.cartValue]);



    const handleChange = (e) => {
        setInfoBuyerData({ ...infoBuyerData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        let order = { buyer: infoBuyerData, invoiceDetail: context.cartValue, total: context.getTotalCartValue(), date: new Date().toISOString() };
        saveOrder({order})
            .then((res) => {
                console.log(res);
                setOrderId(res.id);
                context.clearAll();
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoader(false));

    };

    if (loader)
        return (
            <Loader />
        )

    if (error)
        return (
            <Error errorMessage={error} />
        )

    if (errorCart && !orderId)
        return (
            <EmptyCart />
        )

    if (orderId)
        return (
            <FinishedProcessBuying orderId={orderId} />
        )

    return (
        <div className="checkout-container">
            <h1 className='checkout-title'>Ingrese sus datos para confirmar la orden</h1>
            < Form onSubmit={handleSubmit} className="p-4 bg-dark rounded shadow-sm checkout-form">
                <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Control
                        type="text"
                        name="nombre"
                        placeholder="Nombre Completo"
                        value={infoBuyerData.nombre}
                        onChange={handleChange}
                        required
                        maxLength={30}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="ejemplo@correo.com"
                        value={infoBuyerData.email}
                        onChange={handleChange}
                        required
                        maxLength={50}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDireccion">
                    <Form.Control
                        type="text"
                        name="direccion"
                        placeholder="Av Mitre 300"
                        value={infoBuyerData.direccion}
                        onChange={handleChange}
                        required
                        maxLength={30}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formIdentificacion">
                    <Form.Control
                        type="text"
                        name="identificacion"
                        placeholder="CUIT-CUIL-DNI"
                        value={infoBuyerData.identificacion}
                        onChange={handleChange}
                        required
                        maxLength={11}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCelular">
                    <Form.Control
                        type="tel"
                        name="celular"
                        placeholder="5491112345678"
                        value={infoBuyerData.celular}
                        onChange={handleChange}
                        required
                        maxLength={15}
                    />
                </Form.Group>

                <div className="d-flex justify-content-center">
                    <Button variant="light" type="submit" className="px-4" disabled={loader}>
                        Terminar Compra
                    </Button>
                </div>
            </Form >
        </div>
    );
}

export default Checkout;