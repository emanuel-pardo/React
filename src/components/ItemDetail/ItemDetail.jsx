import { useEffect, useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
    if (!product) return null;
    const context = useContext(CartContext);

    const addingQuantity = (quantity) => {
        context.addItem(product, quantity);
    }
    
    const quantityAvailable = context.getQuantityAvailableByItem(product);

    return (
        <div className='detail-container'>
            <img src={product?.img} alt={product?.code} className="detail-img" />
            <div className="detail-info">
                <h1 className="detail-title">{product?.name?.toUpperCase() ?? ""}</h1>
                <h2 className="detail-title">{product?.category?.toUpperCase() ?? ""} </h2>
                <p className="detail-text">{product?.description ?? ""}</p>
                <p className="detail-numbers">Disponibilidad: {quantityAvailable ?? 0}</p>
                <p className="detail-numbers">${product?.price ?? 0}</p>
                <ItemCount quantityAvailable={quantityAvailable} addingQuantity={addingQuantity} />
            </div>
        </div>
    )
}

export default ItemDetail