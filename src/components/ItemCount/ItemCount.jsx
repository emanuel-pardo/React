import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ quantityAvailable, addingQuantity }) => {

    const [count, setCount] = useState(0);

    const sumar = () => {
        if (count < quantityAvailable)
            setCount(count + 1);
    }

    const restar = () => {
        if (count > 0)
            setCount(count - 1);
    }

    const addToCartValue = () => {
        if (count > 0){
            addingQuantity(count);
            setCount(0);
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center all">

                <button className="btn btn-dark" disabled={count === 0} onClick={restar}>-</button>
                <span className="btn btn-light counting-span">{count}</span>
                <button className="btn btn-dark" disabled={count === quantityAvailable} onClick={sumar}>+</button>
            </div>
            <div className="d-flex justify-content-center align-items-center all">
                <button className="btn btn-dark" onClick={addToCartValue} disabled={count === 0 || quantityAvailable === 0}>Agregar a carrito</button>
            </div>
        </>
    )
}

export default ItemCount