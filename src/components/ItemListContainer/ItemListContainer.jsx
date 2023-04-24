import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { mFetch } from "../../utils/mFetch";
import { Filter } from "../Filter/Filter";
import { ItemList } from "../ItemList/ItemList";
import { Carousel } from "../Carousel/Carousel";
import { ItemCount } from "../ItemCount/ItemCount";


export const ItemListContainer = () => {
    
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { cid } = useParams();
  
  useEffect(()=>{
      if( !cid ) {     
          mFetch()
          .then( result => { 
              setProducts( result )
          })
          .catch( error => console.log( error ))
          .finally(() => setIsLoading( false ));   

      } else {
          mFetch()
          .then( result => { 
              setProducts( result.filter ( products => products.category === cid))
          })
          .catch( error => console.log( error ) )
          .finally(() => setIsLoading( false ))   
      }
  }, [cid])

  const handleProductFiltered = ({ filterState, handleFilterChange }) => (
      <div>
          <input className='search-bar mt-5 mb-3 p-3 text-start'  type='text' placeholder='¿Qué estás buscando?' value={filterState} onChange={handleFilterChange} />
        <div className="d-flex flex-wrap item-list">
            { isLoading ? 
                <>
                <p>Cargando...</p>
                </>
            :
                <>
                    { filterState === ''
                        ?  
                        <ItemList products={products} />
                        :
                        <>
                        { products.filter( product => product.description.toLowerCase().includes(filterState.toLowerCase())).map(({ id, img, price, description, stock }) => 
                                                  <div key={id} className="card text-center mb-2 mt-2">
                                                    <div className="card-body">
                                                        <Link to={`/item/${id}`}> 
                                                            <img src={img} className="card-img-top mb-4" alt="imagen-card" />
                                                        </Link>
                                                        <h6> {description}</h6>
                                                        <label>Precio: {price}€</label>
                                                        <br/>
                                                        <label>Stock: {stock}</label>
                                                    </div>
                                                    <div className='card-footer'>
                                                        <ItemCount stock={stock} />
                                                    </div>
                                                 </div>  
                                        )
                            }  
                        </>
                    }
                </>
            }
        </div>
    </div>
  )

  
  return (
      <div>
          <Carousel />
          <div className='p-5 pt-1 m-5 mt-1'>
          <Filter >
              { handleProductFiltered }
          </Filter>       

          </div>
      </div>
  )
}
