import { Item } from "../Item/Item";

export const ItemDetail = ({product}) => { 

  return (
        <div className="d-flex justify-content-center mt-5">
          <Item key={product.id} product={product}/>
        </div>
        )}
    