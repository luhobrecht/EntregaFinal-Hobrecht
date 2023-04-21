import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { mFetch } from "../../utils/mFetch";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {  
  const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    const { pid } = useParams();
    
    useEffect(()=>{
            mFetch ( pid )
            .then( result => { setProduct( result ) })
            .catch( error => console.log( error ))
            .finally(()=> setIsLoading(false))   
    }, [])

  return (
    <>
    { isLoading ? 
      <p>Cargando</p>
    :  
      <ItemDetail product={product}/>
    }
    </>
  )
}