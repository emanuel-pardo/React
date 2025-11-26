import './Checkout.css';
import { Button, Form } from "react-bootstrap";
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import EmptyCart from "../EmptyCart/EmptyCart";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import { saveOrder } from "../../service/orderService";

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
        celular: ""
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
        saveOrder(order)
            .then((res) => {
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

    if (errorCart)
        return (
            <EmptyCart />
        )

    return (
        <>
            <h1>Ingrese sus datos para confirmar la orden</h1>
            < Form onSubmit={handleSubmit} className="p-4 bg-dark rounded shadow-sm checkout-form">
                <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Control
                        type="text"
                        name="nombre"
                        placeholder="Nombre Completo"
                        value={infoBuyerData.nombre}
                        onChange={handleChange}
                        required
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
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCelular">
                    <Form.Control
                        type="tel"
                        name="celular"
                        placeholder="+5491112345678"
                        value={infoBuyerData.celular}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <div className="d-flex justify-content-center">
                    <Button variant="light" type="submit" className="px-4" disabled={loader}>
                        Terminar Compra
                    </Button>
                </div>
            </Form >
        </>
    );
}

export default Checkout;