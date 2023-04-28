import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext( CartContext );

export const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([]);

    const addToCart = ( newProduct ) => {
        setCartList ([
            ...cartList,
            newProduct
        ])
    };

    const clearCartList = () => {
        setCartList([])
    };

    const deleteItem = (id) => {
        const newCartList = cartList.filter(product => product.id !== id);
        setCartList(newCartList);
    };
    
    return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        clearCartList,
        deleteItem
    }}>
        {children}
    </CartContext.Provider>
  )
}
