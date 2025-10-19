import "./ItemListContainer.css";
import { getProducts } from "../../mock/ToApiAsync";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getProducts()
            .then((res) => setData(res))
            .catch((error) => props.title = error)
    }, []);




    return (
        <>
            <div className='ilc-container'>
                <h1 className="ilc-title">{props.title}</h1>
                <h2 className="ilc-subtitle">{props.subtitle} </h2>
                <p className="ilc-text">{props.text}</p>
            </div>
            <ItemList data={data} />
        </>
    )
}

export default ItemListContainer