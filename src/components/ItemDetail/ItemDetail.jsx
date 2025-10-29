import { useEffect, useState } from "react";
import "./ItemDetail.css";

const ItemDetail = ({product}) => {
 
    return (
        <>
            <div className='detail-container'>
                <img src={product?.img}alt={product?.code} className="detail-img"/>
                <h1 className="detail-title">{product?.name}</h1>
                <h2 className="detail-subtitle">{product?.code} </h2>
                <p className="detail-text">{product?.description}</p>
                <h2 className="detail-subtitle">{product?.category} </h2>
            </div>
        </>
    )
}

export default ItemDetail