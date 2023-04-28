import { useCartContext } from '../../context/CartContext';
import { useCounter } from '../../hooks/useCounter';
import { NavLink } from 'react-router-dom';

export const ItemCount = ({stock, initial = 0, onAdd}) => {
   

    const {increment, decrement, counter } = useCounter(initial, stock, onAdd);
    
  return (
    <>
        <div className='d-flex justify-content-center m-2'>
        {
          (counter === 0) 
          ?
          <button className='btn decrement btn-secondary disabled' onClick={ decrement }>-</button>
          :
          <button className='btn decrement btn-secondary' onClick={ decrement }>-</button>
        }
        <p className='m-2'>{ counter }</p>
        {
          (stock === 0 ) 
          ?
          <button className='btn increment btn btn-secondary disabled'>+</button>
          :
          <button className='btn increment btn btn-secondary' onClick={ increment }>+</button>
        }
        </div>
        <hr/>
        {
          (counter === 0 || stock === 0)
          ?
          <NavLink to='/cart' className='btn btn-primary mb-1 disabled'>Agregar al carrito</NavLink>
          :
          <NavLink to='/cart' className='btn btn-primary mb-1' onClick={ () => { onAdd ( counter )}}>Agregar al carrito</NavLink>
        }
    </>
  )
}
