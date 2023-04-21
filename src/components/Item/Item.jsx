import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({product: {id, description, price, img}}) => {
  return (
    <div key={id} className="card w-25">
                                <div className="card-body">
                              <Link to={`/item/${id}`}> 
                                    <img src={img} className="card-img-top" alt="imagen-card" />
                              </Link>
                                    <h6> {description}</h6>
                                    <label>Precio: ${price}</label>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-outline-dark">Agregar al carrito</button>
                                </div>
    </div>  
  )
}
