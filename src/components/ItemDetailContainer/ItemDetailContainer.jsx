import { getProductsById } from "../../service/productService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";


const ItemDetailContainer = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const { id } = useParams();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        setError("");
        getProductsById(id)
            .then((res) => setData(res))
            .catch((error) => setError(error.message))
            .finally(() => setLoader(false));
    }, [id]);

    if (error)
        return (
            <Error errorMessage={error} />
        )

    return (
        <>
            {loader ?
                <Loader /> :
                <ItemDetail product={data} />
            }
        </>
    )
}

export default ItemDetailContainer