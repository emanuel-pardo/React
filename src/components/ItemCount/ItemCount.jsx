import { useEffect, useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock = 0 }) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(0);
    }, [stock]);

    const sumar = () => {
        if (count < stock)
            setCount(count + 1);
    }

    const restar = () => {
        if (count > 0)
            setCount(count - 1);
    }

    return (
        <div className="d-flex justify-content-center align-items-center all">
            <button className="btn btn-dark" disabled={count === 0} onClick={restar}>-</button>
            <span className="btn btn-light counting-span">{count}</span>
            <button className="btn btn-dark" disabled={count === stock} onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount