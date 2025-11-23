import { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
    if (!product) return null;
    const [purchase, setPurchase] = useState(false);
    const context = useContext(CartContext);

    const addingQuantity = (quantity) => {
        context.addItem(product, quantity);
        setPurchase(true);
    }

    const legendWithoutStock = "---";

    const quantityAvailable = context.getQuantityAvailableByItem(product);

    return (
        <div className='detail-container'>
            <img src={product?.img} alt={product?.code} className="detail-img" />
            <div className="detail-info">
                <h1 className="detail-title">{product?.name?.toUpperCase() ?? ""}</h1>
                <h2 className="detail-title">{product?.category?.toUpperCase() ?? ""} </h2>
                <p className="detail-text">{product?.description ?? ""}</p>
                <p className="detail-numbers">Disponibilidad: {quantityAvailable === 0 ? legendWithoutStock : quantityAvailable}</p>
                <p className="detail-numbers">${product?.price ?? 0}</p>
                {
                    purchase || quantityAvailable === 0 ?
                        <Link className="btn btn-dark" to="/cart">
                            Terminar Compra
                        </Link> :
                        <ItemCount quantityAvailable={quantityAvailable} addingQuantity={addingQuantity} />
                }
            </div>
        </div>
    )
}

export default ItemDetail