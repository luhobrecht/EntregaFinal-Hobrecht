import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { mFetch } from "../../utils/mFetch";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemList = () => {

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { cid } = useParams();
  
  useEffect(()=>{
      if( !cid ) {
          
          mFetch()
          .then( result => { 
              setProduct(result)
          })
          .catch( error => console.log(error) )
          .finally(()=> setIsLoading(false))   

      } else {
          mFetch()
          .then( result => { 
              setProduct(result.filter(product => product.category === cid) )
          })
          .catch( error => console.log(error) )
          .finally(()=> setIsLoading(false))   
      }
  }, [cid])
  
  return (
    <div>
        { isLoading ? 
                <>
                <p>
                Cargando...
                </p>
                </>
            :
      <div className="d-flex flex-wrap cards">
            {product.map(({ id, img, price, category, description,stock }) => 
                            <div key={id} className="card w-25">
                                <div className="card-body">
                              <Link to={`/item/${id}`}> 
                                    <img src={img} className="card-img-top" alt="imagen-card" />
                              </Link>
                                    <h6> {description}</h6>
                                    <label>Precio: ${price}</label>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-outline-dark">Agregar al carrito</button>
                                </div>
                            </div>     
                        )
            }
      </div>
        }
    </div>
        
  ) 
}
