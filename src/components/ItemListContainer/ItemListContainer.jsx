import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { mFetch } from "../../utils/mFetch";
import { Filter } from "../Filter/Filter";


 export const ItemListContainer = ({greeting}) => {
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

    const handleProductFiltered = ({filterState, handleFilterChange}) => (
        <div className="container">
            <input className='search-bar' type='text' placeholder='¿Qué estás buscando?' value={filterState} onChange={handleFilterChange} />

            <div className="d-flex flex-wrap cards">
            { isLoading ? 
                <>
                <p>
                Cargando...
                </p>
                </>
            :
                <>
                    { filterState === ''
                        ? products.map(({ id, img, price, description }) => 
                                <div key={id} className="card w-25">
                                    <Link to={`/item/${id}`}> 
                                    <div className="card-body">
                                        <img src={img} className="card-img-top" alt="imagen-card" />
                                        <h6> {description}</h6>
                                        <label>Precio: ${price}</label>
                                    </div>
                                    </Link>
                                    <div className="card-footer">
                                        <button className="btn btn-outline-dark">Agregar al carrito</button>
                                    </div>
                                </div>
                        )
                        :
                        products.filter( product => product.name.toLowerCase().includes(filterState.toLowerCase())).map(({ id, img, price, description }) => 
                                <div key={id} className="card w-25">
                                    <Link to={`/item/${id}`}> 
                                    <div className="card-body">
                                        <img src={img} className="card-img-top" alt="imagen-card" />
                                        <h6> {description}</h6>
                                        <label>Precio: ${price}</label>
                                    </div>
                                    </Link>
                                    <div className="card-footer">
                                        <button className="btn btn-outline-dark">Agregar al carrito</button>
                                    </div>
                                </div>
                        )
                    }
                
                </>

            }
            </div>
        </div>
    )

    
    return (
        <div className='container'>
            <Filter >
                { handleProductFiltered }
            </Filter>       
        </div>
    )
}
