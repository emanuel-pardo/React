import { useEffect, useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
    if (!product) return;

    return (
        <div className='detail-container'>
            <img src={product?.img} alt={product?.code} className="detail-img" />
            <div className="detail-info">
                <h1 className="detail-title">{product?.name?.toUpperCase() ?? ""}</h1>
                <h2 className="detail-title">{product?.category?.toUpperCase() ?? ""} </h2>
                <p className="detail-text">{product?.description ?? ""}</p>
                <p className="detail-numbers">Disponibilidad: {product?.stock ?? 0}</p>
                <p className="detail-numbers">${product?.price ?? 0}</p>
                <ItemCount stock={product?.stock}/>
            </div>
        </div>
    )
}

export default ItemDetail