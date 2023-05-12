import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext( CartContext );

export const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([]);
    const [total, setTotal] = useState(0);

    const addToCart = ( newProduct ) => {
        
        const product = cartList.findIndex(product => product.id === newProduct.id)
        
        if (product === -1) {
            setCartList ([
                ...cartList,
                newProduct,
            ])
        } else {
            cartList[product].quantity += newProduct.quantity;
            setCartList([...cartList]);
        }
    };

    const clearCartList = () => {
        setCartList([])
    };

    const deleteItem = (id) => {
        const newCartList = cartList.filter(product => product.id !== id);
        setCartList(newCartList);
    };
 
    const handleTotal = () => {
    const total = cartList.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setTotal(total);
    };
    
    const handleCartWidget = () => cartList.reduce((acc, product) => acc + product.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clearCartList,
            deleteItem,
            handleTotal,
            total,
            handleCartWidget
        }}>
            {children}
        </CartContext.Provider>
  )
}
