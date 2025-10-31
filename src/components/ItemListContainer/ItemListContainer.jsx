import { getProducts, getProductsByCategoryId } from "../../mock/ToApiAsync";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        if (categoryId) {
            getProductsByCategoryId(categoryId)
                .then((res) => setData(res))
                .catch((error) => console.error("Error al obtener productos:", error))
        }
        else {
            getProducts()
                .then((res) => setData(res))
                .catch((error) => console.error("Error al obtener productos:", error))
        }
    }, [categoryId]);

   
    return (
        <>
            <ItemList data={data} />
        </>
    )
}

export default ItemListContainer