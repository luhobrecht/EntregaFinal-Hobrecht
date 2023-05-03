import { memo } from 'react';
import { Link } from 'react-router-dom';

export const Item = memo(({product: {id, description, price, img, stock}}) => {
    return (
          <div key={id} className="card text-center mb-2 mt-2">
            <div className="card-body">
              <Link to={`/item/${id}`}> 
                    <img src={img} className="card-img-top mb-4" alt="imagen-card" />
              </Link>
            </div>
            <div className='card-footer p-2'>
              <h6> {description}</h6>
              <label>Precio: {price}€</label>
            </div>
                      {/* <label>Stock: {stock}</label> */}
          </div>  
    )
  }
)
