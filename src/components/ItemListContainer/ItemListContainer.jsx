import { getProducts, getProductsByCategoryId } from "../../mock/ToApiAsync";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Error from "../Error/Error";

const ItemListContainer = () => {

    const [error, setError] = useState("");
    const [data, setData] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {   
        setError("");     
        if (categoryId) {
            getProductsByCategoryId(categoryId)
                .then((res) => setData(res))
                .catch((error) => setError(error.message))
        }
        else {
            getProducts()
                .then((res) => setData(res))
                .catch((error) => setError(error.message))
        }
    }, [categoryId]);

    if (error)
        return (
            <Error errorMessage={error} />
        )
    return (
        <ItemList data={data} />
    )
}

export default ItemListContainer