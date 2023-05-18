import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { NavLink, useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";


export const ItemDetailContainer = () => {  
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { pid } = useParams();
    
  useEffect(()=>{
    const db = getFirestore();
    const queryItem = doc(db, 'products', pid);

      getDoc(queryItem)
      .then( res => setProduct({ id: res.id, ...res.data()}))
      .catch( error => console.log( error ))
      .finally(()=> setIsLoading(false))   
  }, [])

  return (
    <>     
      {(isLoading) 
      ? 
        <Loading />
      :  
        <>
          {(product.description === undefined)
          ?
            (
            <div className="container product-error d-flex flex-column">
              <h3 className="text-center alert alert-warning mt-5">El producto no existe.</h3>
              <NavLink to="/" className="btn btn-dark mt-3 w-20 align-self-end">Volver al inicio</NavLink>
            </div>  
            )
          :
          <>
            <ItemDetail product={product}/>
            <div className="container d-flex flex-row justify-content-between mt-5">
              <NavLink to="/" className="btn btn-dark mt-3 w-20 align-self-end">Volver al inicio</NavLink>
            </div>
          </>
          }
        </>
      }
    </>  
  )
};