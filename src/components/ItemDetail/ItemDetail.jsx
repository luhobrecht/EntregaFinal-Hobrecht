import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({product: {id, description, price, img, stock}}) => { 

  return (
          <div key={id} className="d-flex justify-content-center m-20">
            <div  className="card w-25">
                <div className="card-body">
              <Link to={`/item/${id}`}> 
                    <img src={img} className="card-img-top" alt="imagen-card" />
              </Link>
                    <h6> {description}</h6>
                    <label>Precio: ${price}</label>
                    <br />
                    <label>En stock: { stock } </label>
                </div>
                <ItemCount />
            </div>                     
          </div>
         )
}