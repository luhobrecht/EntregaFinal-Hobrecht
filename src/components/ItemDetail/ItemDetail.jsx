import { useCartContext } from "../../context/CartContext";
import { Item } from "../Item/Item";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({product}) => { 

  const {addToCart} = useCartContext();
    
  const onAdd = ( quantity ) => {
    addToCart ({...product, quantity})
  }

  return (
        <div className="d-flex flex-column align-items-center mt-5">
          <Item product={product}/>
           <div className='card card-footer w-25'>
              <ItemCount stock={ product.stock } onAdd={ onAdd }/>
            </div>
        </div>
        )}
    