import { useEffect, useState } from "react";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
    return (
        <>
            <div className='detail-container'>
                <img src={product?.img} alt={product?.code} className="detail-img" />
                <h1 className="detail-title">{product?.name?.toUpperCase() ?? ""}</h1>
                <h2 className="detail-title">{product?.category?.toUpperCase() ?? ""} </h2>
                <h3 className="detail-subtitle">{product?.code ?? ""} </h3>
                <p className="detail-text">{product?.description ?? ""}</p>
                <p className="detail-numbers">${product?.price ?? 0}</p>
                <p className="detail-numbers">{product?.stock ?? 0}</p>
            </div>
        </>
    )
}

export default ItemDetail