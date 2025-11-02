import React from 'react'
import ItemCard from '../ItemCard/ItemCard'
import './ItemList.css';

const ItemList = ({ data }) => {
    return (
        <div  className="item-list">
            {data?.map((product) => <ItemCard key={product.id} product={product}/>)}
        </div>

    )
}

export default ItemList