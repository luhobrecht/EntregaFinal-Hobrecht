import './ItemCount.css'
import { useCounter } from '../../hooks/useCounter'

export const ItemCount = (initial, stock) => {

    const {onAdd, decrement, reset, counter } = useCounter();

       
  return (
    <>
        <div className='divCounter'>
        <button className='btn decrement btn btn-primary' onClick={ decrement }>-</button>
        <p className='counter'>{ counter }</p>
        <button className='btn increment btn btn-primary' onClick={ onAdd }>+</button>
        </div>
        <button className='btn reset btn btn-outline-secondary' onClick={ reset }>Eliminar todo</button>
        <hr/>
        <button className='btn btn-secondary mb-3'>Agregar al carrito</button>
    </>
  )
}
