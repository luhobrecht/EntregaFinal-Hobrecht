import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext( CartContext );

export const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([]);
    const [total, setTotal] = useState(0);
    const [cartWidget, setCartWidget] = useState(0);

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

    const isInCart = (id, quantity) => {
        const product = cartList.findIndex(product => product.id === id)
        if (product !== -1) {  
            const updateQuantity = { 
                ...cartList[product],
                quantity: cartList[product].quantity + quantity
                };
            const updatedCartList = [...cartList];
            updatedCartList[product]= updateQuantity;
            setCartList(updatedCartList);
            } 
    };

  
    const isTotal = () => {
    const total = cartList.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setTotal(total);
    };
    
    console.log(total)
    // const handleCartWidget = () => {
    //     const cartWidget = cartList.reduce((acc, product) => acc + product.quantity, 0);
    //     setCartWidget(cartWidget);
    // };

    
    return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        clearCartList,
        deleteItem,
        isInCart,
        isTotal,
        total,
        // cartWidget,
        // handleCartWidget
    }}>
        {children}
    </CartContext.Provider>
  )
}
