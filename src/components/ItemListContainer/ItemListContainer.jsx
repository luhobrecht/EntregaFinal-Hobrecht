import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { Filter } from "../Filter/Filter";
import { ItemList } from "../ItemList/ItemList";
import { Carousel } from "../Carousel/Carousel";
import { Loading } from "../Loading/Loading";


export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { cid } = useParams();
  
  useEffect(()=>{
    const db = getFirestore();
    const itemCollection = collection(db, 'products');
    
      if( !cid ) {     
        const activeCollection = query(
          itemCollection,
          where('isActive', '==', true)
        )
          getDocs(activeCollection)
          .then(res => setProducts( res.docs.map(product => ({ id: product.id, ...product.data() }))))
          .catch( error => console.log( error ))
          .finally(() => setIsLoading( false ));   
        } else {
          const itemCollectionByCategory = query(
                  itemCollection,
                  where('category', '==', cid )
        )
          getDocs(itemCollectionByCategory)
          .then( res => setProducts( res.docs.map(product => ({ id: product.id, ...product.data()}))))   
          .catch( error => console.log( error ) )
          .finally(() => setIsLoading( false ))   
        }
      }, [cid])

    const handleProductFiltered = ({ filterState, handleFilterChange }) => (
      <div>
        <input className='search-bar mt-5 mb-3 p-3 text-start'  type='text' placeholder='¿Qué estás buscando?' value={filterState} onChange={handleFilterChange} />
        <div className="d-flex flex-wrap item-list">
          <ItemList 
            products = {
            filterState === '' ?
            products
            :
            products.filter( product => product.description.toLowerCase().includes(filterState.toLowerCase()))
          }
          />
        </div>
    </div>
  );
  return (
      <div className="global">
        <Carousel />
        <div className='global p-5 pt-1 m-5 mt-1'>
          {
            isLoading ?
            <Loading />
          :
            <Filter >
              { handleProductFiltered }
            </Filter>       
          }
        </div>
      </div>
  )
};
