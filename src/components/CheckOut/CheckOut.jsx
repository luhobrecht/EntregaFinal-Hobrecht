import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../../context/CartContext";
import { CheckOutForm } from "../CheckOutForm/CheckOutForm";

export const CheckOut = () => {
  const {cartList, total, clearCartList} = useCartContext();
  const [orderNumber, setOrderNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  
  const createOrder = (userData) => {
    
    setLoading(true);
    
    const order = {
      buyer: userData,
      items: cartList.map(({description, id, price, quantity}) => ({description, id, price, quantity})),
      total: total
    };
    
    console.log(order)
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    
    
    addDoc(ordersCollection, order)
      .then(res => setOrderNumber(res.id))
      .catch(err => console.log(err))
      .finally(() => {
        setTimeout(() => {
          clearCartList();
          setLoading(false)
        } , 5000)
      }
      )
    };

  if (loading) {
    return <h4 className="alert alert-secondary text-center ">⚠️ Tu pedido está en construcción... ⚠️</h4>
  }
  if (orderNumber) {
    return (
      <div className="order-number">
        <h4 className="alert alert-success text-center">Tu pedido se ha confirmado ✔️<hr/>Tu número de órden es #{orderNumber}</h4>
        <h1 className="m-5 text-center"> ¡Gracias por tu compra! 👽</h1>
      </div>
      
      )
  }

  return (
    <>
     <CheckOutForm createOrder={createOrder}/>
    </>
  )
}
