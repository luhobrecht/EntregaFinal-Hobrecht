import { useState } from 'react'

export const useCounter = ( initial = 0, stock ) => {

    const [counter, setCounter] = useState( initial )

    const onAdd = () => {
        setCounter( counter + 1 )
    };

    const decrement = () => {
        if (counter === 0 ) return;
        setCounter( counter - 1 );
    };

    const reset = () => {
        setCounter( initial )
    };

  return {
    counter,
    onAdd,
    decrement,
    reset,
  }  
}
