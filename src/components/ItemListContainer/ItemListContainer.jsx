import { getProducts,getProductsByCategoryId } from "../../service/productService";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState([]);
    const { categoryId } = useParams();

 useEffect(() => {
        setError("");
        setLoader(true);
        if (categoryId) {
            getProductsByCategoryId(categoryId)
                .then((res) => setData(res))
                .catch((error) => setError(error.message))
                .finally(() => setLoader(false))
        }
        else {
            getProducts()
                .then((res) => setData(res))
                .catch((error) => setError(error.message))
                .finally(() => setLoader(false))
        }
    }, [categoryId]);

    // useEffect(() => {
    //     setError("");
    //     setLoader(true);
    //     if (categoryId) {
    //         getProductsByCategoryId(categoryId)
    //             .then((res) => setData(res))
    //             .catch((error) => setError(error.message))
    //             .finally(() => setLoader(false))
    //     }
    //     else {
    //         getProducts()
    //             .then((res) => setData(res))
    //             .catch((error) => setError(error.message))
    //             .finally(() => setLoader(false))
    //     }
    // }, [categoryId]);

    if (error)
        return (
            <Error errorMessage={error} />
        )
    return (
        <>
            {loader ? <Loader /> : <ItemList data={data} />}
        </>

    )
}

export default ItemListContainer