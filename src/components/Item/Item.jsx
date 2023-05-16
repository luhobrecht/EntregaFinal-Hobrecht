import { memo } from 'react';
import { Link } from 'react-router-dom';

export const Item = memo(({product: {id, description, price, img, color}, selection}) => {
  console.log(selection) 
  return (
          <div key={id} className="card text-center mb-2 mt-2">
            <div className="card-body">
              <Link to={`/item/${id}`}> 
                  { (selection && selection.img) ?
                    <img src={selection.img} className="card-img-top mb-4" alt="imagen-card" />  
                    :
                    <img src={img[0]} className="card-img-top mb-4" alt="imagen-card" />
                  }
                {/* <img src={img[0]} className="card-img-top mb-4" alt="imagen-card" /> */}

              </Link>
            </div>
            <div className='card-footer item-footer d-flex justify-content-center flex-column'>
              <h6> {description}</h6>
              <label>Precio: {price}€</label>
            </div>
                      {/* <label>Stock: {stock}</label> */}
          </div>  
    )
  }
)
