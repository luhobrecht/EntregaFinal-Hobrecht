import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { mFetch } from "../../utils/mFetch";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { pid } = useParams();
  
  useEffect(()=>{
      if( !pid ) {
          
          mFetch()
          .then( result => { 
              setProduct(result)
          })
          .catch( error => console.log(error) )
          .finally(()=> setIsLoading(false))   

      } else {
          mFetch()
          .then( result => { 
              setProduct(result.filter(product => product.id === pid) )
          })
          .catch( error => console.log(error) )
          .finally(()=> setIsLoading(false))   
      }
  }, [pid])



  
  return (
    <>
      <ItemDetail
        // product= {product} 
      />
        { isLoading ? 
            <>
            <p>
            Cargando...
            </p>
            </>
        :
          product.map(({ id, img, price, category, description,stock }) => 
                        <div className="d-flex justify-content-center m-20">
                          <div key={id} className="card w-25">
                              <div className="card-body">
                            <Link to={`/detail/${id}`}> 
                                  <img src={img} className="card-img-top" alt="imagen-card" />
                            </Link>
                                  <h6> {description}</h6>
                                  <label>Precio: ${price}</label>
                                  <br />
                                  <label>En stock: { stock } </label>
                              </div>
                              <ItemCount />
                          </div>                     
                        </div>
                      )
        }

    </>
  )
}
