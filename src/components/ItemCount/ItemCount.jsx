import { useCounter } from '../../hooks/useCounter';

export const ItemCount = ({stock, initial = 0, onAdd}) => {
   
    const {increment, decrement, counter } = useCounter(initial, stock, onAdd);
    
    return (
      <>
        <div className='d-flex justify-content-center m-1'>
          {
            ( counter === 0 ) 
            ?
              <button className='btn decrement btn-secondary disabled' onClick={ decrement }>-</button>
            :
              <button className='btn decrement btn-secondary' onClick={ decrement }>-</button>
          }
          <p className='m-2'>{ counter }</p>
          {
            ( stock === 0 ) 
            ?
              <button className='btn increment btn btn-secondary disabled'>+</button>
            :
              <button className='btn increment btn btn-secondary' onClick={ increment }>+</button>
          }
        </div>
        <hr/>
          {
            ( counter === 0 || stock === 0 )
            ?
              <button to='/cart' className='btn btn-primary mb-1 disabled'>Agregar al carrito</button>
            :
              <button to='/cart' className='btn btn-primary mb-2' onClick={ () => { onAdd ( counter )}}>Agregar al carrito</button>
          }
      </>
  )
}
