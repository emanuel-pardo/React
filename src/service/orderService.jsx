import { collection, addDoc } from "firebase/firestore";
import { dataBaseFS } from "./firebase"

const DB_ORDERS_NAME = "orders";

export const saveOrder = async ({ order }) => {
    try {
        const sale = collection(dataBaseFS, DB_ORDERS_NAME)
        const response = await addDoc(sale, order);
        if (!response?.id) {
            throw new Error("No se pudo generar la orden");
        }
        return {
            id: response.id,
            ...order
        };
    }
    catch (err) {
        throw err;
    }
}