import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { Item } from "../Item/Item";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import { ColorSelector } from "../ColorSelector/ColorSelector";


export const ItemDetail = ({product}) => { 
  const [isItem, setIsItem] = useState(false)
  const {addToCart} = useCartContext();
  const [selection, setSelection] = useState({
    color: product.color[0],
    img: product.img[0]
  });
  
  const optionSelected= (event) => {
    const colorSelected = event.target.value;
    const colorIndex = product.color.indexOf(colorSelected);
    if (colorIndex !== -1) {
        const imageUrl = product.img[colorIndex];
        setSelection({
            color: colorSelected,
            img: imageUrl
      })
    }
  };

  const onAdd = (quantity) => {
    addToCart ({...product, quantity, selection });
    setIsItem(true);
  }
  
  return (
      <>
        <div className="d-flex flex-column align-items-center mt-5">
          <Item product={product} selection={selection}/>
            <div className="card card-footer p-2 ">
              <ColorSelector selection={selection} optionSelected={optionSelected} product={product} />
            </div>
          <div className='card card-footer  p-3 mt-2'>
          {
            (isItem) ?
              <>
                <p className='text-center message alert alert-success'>¡Se agregó al carrito!</p>
                <Link to='/' className='btn btn-dark mb-1'>Seguir comprando</Link>
                <Link to='/cart' className='btn btn-success mb-1'>Terminar compra</Link>
              </>
            :
              <ItemCount stock={ product.stock } onAdd={ onAdd } />
          }
          </div>
        </div>
      </>
  )
};
    