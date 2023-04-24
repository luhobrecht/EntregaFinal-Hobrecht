import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';

export const Item = ({product: {id, description, price, img, stock}}) => {
  return (
    <div key={id} className="card text-center mb-2 mt-2">
                                <div className="card-body">
                              <Link to={`/item/${id}`}> 
                                    <img src={img} className="card-img-top mb-4" alt="imagen-card" />
                              </Link>
                                    <h6> {description}</h6>
                                    <label>Precio: {price}€</label>
                                    <br/>
                                    <label>Stock: {stock}</label>
                                </div>
                                <div className='card-footer'>
                                <ItemCount stock={stock} />
                                </div>
    </div>  
  )
};
