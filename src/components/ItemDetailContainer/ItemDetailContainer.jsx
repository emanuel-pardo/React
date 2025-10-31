import { getProductsById } from "../../mock/ToApiAsync";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {

    const [data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getProductsById(id)
            .then((res) => setData(res))
            .catch((error) => console.error("Error al obtener productos:", error))
    }, [id]);

    return (
        <>
            <ItemDetail product={data} />
        </>
    )
}

export default ItemDetailContainer