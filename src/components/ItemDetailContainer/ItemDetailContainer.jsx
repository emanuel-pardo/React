import { getProductsById } from "../../mock/ToApiAsync";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Error from "../Error/Error";


const ItemDetailContainer = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const { id } = useParams();

    useEffect(() => {
        getProductsById(id)
            .then((res) => setData(res))
            .catch((error) => setError(`Error al obtener producto: ${JSON.stringify(error)}`))
    }, [id]);

    if (error)
        return (
            <>
                <Error  errorMessage={error} />
            </>
        )
    return (
        <>
            <ItemDetail product={data} />
        </>
    )
}

export default ItemDetailContainer