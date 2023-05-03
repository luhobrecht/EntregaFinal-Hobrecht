import { memo } from "react";
import { Item } from "../Item/Item";

export const ItemList = memo(({ products }) => {
    return (
        <>
          {products.map( product => 
            <Item key={product.id} product={product}
            />
          )
          }
        </>        
    )
  }
);
