import React from 'react'
import ItemCard from '../ItemCard/ItemCard'
import './ItemList.css';

const ItemList = ({ data }) => {
    return (
        <div  className="item-list">
            {data?.map((item) => <ItemCard key={item.id} product={item}/>)}
        </div>

    )
}

export default ItemList