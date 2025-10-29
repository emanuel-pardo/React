import "./ItemDetailContainer.css";
import { getProductsById } from "../../mock/ToApiAsync";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = ({ id }) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        getProductsById(id)
            .then((res) => setData(res))
            .catch((error) => console.error("Error al obtener productos:", error))
    }, []);

    return (
        <>
            <ItemDetail product={data} />
        </>
    )
}

export default ItemDetailContainer