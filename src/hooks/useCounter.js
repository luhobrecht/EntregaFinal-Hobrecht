import { useState } from 'react'

export const useCounter = ( initial, stock ) => {
    
    const [counter, setCounter] = useState( initial );

    const onAdd = () => {
        if (counter < stock ){
          setCounter( counter + 1)
        }
    };

    const decrement = () => {
        if (counter > 0 ) {
        setCounter( counter - 1 );
        }
    };

    // const reset = () => {
    //     setCounter( initial )
    // };

  return {
    counter,
    onAdd,
    decrement,
    // reset,
  }  
};
