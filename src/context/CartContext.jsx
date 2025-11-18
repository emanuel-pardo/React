import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartValue, SetCartValue] = useState([]);

    const addItem = (item, pQuantity) => {
        if (!item)
            return;

        isInCart(item) ? updateItemCartValue(item, pQuantity) : addItemCartValue(item, pQuantity);
    }

    const removeItem = (item) => {
        if (!item)
            return;
        SetCartValue(cartValue?.filter((product => product.id !== item.id)))
    }

    const clearAll = () => {
        SetCartValue([]);
    }

    const isInCart = (item) => {
        return cartValue?.some(x => x.id === item.id);
    }

    const updateItemCartValue = (item, pQuantity) => {
        const updatedCart = cartValue?.map((x) => {
            if (x.id === item?.id)
                return { ...x, quantity: x.quantity + pQuantity };
            return x;
        });

        SetCartValue(updatedCart);

    }

    const addItemCartValue = (item, pQuantity) => {
        SetCartValue([...cartValue, { ...item, quantity: pQuantity }])

    }

    const getTotalQuantity = () => {
        const totalQuantity = cartValue?.reduce((acc, item) => acc + item.quantity, 0);
        return totalQuantity;

    }

    const getQuantityAvailableByItem = (item) => {
        if (!item)
            return 0;
        const inCart = cartValue.find(x => x.id === item.id)?.quantity || 0;
        return item.stock - inCart;
    };


    return (
        <CartContext.Provider value={{ cartValue, addItem, removeItem, clearAll, isInCart, getTotalQuantity,getQuantityAvailableByItem }}>{children}</CartContext.Provider>
    )
}