import { doc, collection, getDocs, where, query, getDoc } from "firebase/firestore";
import { dataBaseFS } from "./firebase"

const DB_PRODUCTS_NAME = "products";

export const getProducts = async () => {
    const productsCollection = collection(dataBaseFS, DB_PRODUCTS_NAME);
    const response = await getDocs(productsCollection);
    const data = response.docs.map((doc) => {
        return {
            id: doc.id,
            ...doc.data()
        }
    })

    if (data.length === 0) {
        throw new Error("Productos no encontrados");
    }

    return data;
};

export const getProductsById = async (pId) => {
    const product = doc(dataBaseFS, DB_PRODUCTS_NAME, pId);
    const response = await getDoc(product);
    if (!response.exists())
        throw new Error("Producto no encontrado");
    return {
        id: response.id,
        ...response.data()
    }
};

export const getProductsByCategoryId = async (categoryId) => {
    
    const productsCollectionByCategory = query(collection(dataBaseFS, DB_PRODUCTS_NAME), where("categoryId", "==", categoryId));
    const response = await getDocs(productsCollectionByCategory);
    const data = response.docs.map((doc) => {
        return {
            id: doc.id,
            ...doc.data()
        }
    })

    if (data.length === 0) 
        throw new Error("Productos no encontrados en Categoria seleccionada");

    return data;
};