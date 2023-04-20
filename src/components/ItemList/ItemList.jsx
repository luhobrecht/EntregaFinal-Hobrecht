import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { mFetch } from "../../utils/mFetch";
import { Filter } from "../Filter/Filter";

export const ItemList = () => {

  const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { cid } = useParams();
    
    useEffect(()=>{
        if( !cid ) {
            
            mFetch()
            .then( result => { 
                setProducts(result)
            })
            .catch( error => console.log(error) )
            .finally(()=> setIsLoading(false))   

        } else {
            mFetch()
            .then( result => { 
                setProducts(result.filter(products => products.category === cid) )
            })
            .catch( error => console.log(error) )
            .finally(()=> setIsLoading(false))   
        }
    }, [cid])

  return (
    <>
    </>
  )
}
