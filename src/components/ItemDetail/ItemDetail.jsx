import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { Item } from "../Item/Item";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";

export const ItemDetail = ({product}) => { 
  const [isItem, setIsItem] = useState(false)
  const {addToCart, isInCart} = useCartContext();
    
  const onAdd = ( quantity ) => {
    addToCart ({...product, quantity})
    isInCart( product.id, quantity)
    setIsItem(true);
  }

  return (
        <div className="d-flex flex-column align-items-center mt-5">
          <Item product={product}/>
           <div className='card card-footer w-25'>
            {
              (isItem) ?
                <>
                  <Link to='/' className='btn btn-dark mb-1'>Seguir comprando</Link>
                  <Link to='/cart' className='btn btn-success mb-1'>Terminar compra</Link>
                </>
              :
                <ItemCount stock={ product.stock } onAdd={ onAdd }/>
            }
            </div>
        </div>
        )}
    