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
            <ItemList data={data} />
        </>
    )
}

export default ItemListContainer