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

    return data;
};

export const getProductsById = async (pId) => {
    const productCollection = doc(dataBaseFS, DB_PRODUCTS_NAME, pId);
    const response = await getDoc(productCollection);
    return {
        id: response.id,
        ...response.data()
    }
};

export const getProductsByCategoryId = async (categoryId) => {
    const productsCollectionByCategory = query(collection(dataBaseFS, DB_PRODUCTS_NAME), where("categoryId", "==", Number(categoryId)));
    const response = await getDocs(productsCollectionByCategory);
    const data = response.docs.map((doc) => {
        return {
            id: doc.id,
            ...doc.data()
        }
    })

    return data;
};