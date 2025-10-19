import React from 'react'
import ItemCard from '../ItemCard/ItemCard'

const ItemList = ({ data }) => {
    return (
        <div>
            {data?.map((item) => <ItemCard key={item.id} product={item} />)}
        </div>

    )
}

export default ItemList