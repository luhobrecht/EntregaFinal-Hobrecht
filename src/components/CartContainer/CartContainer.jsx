import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext"

export const CartContainer = () => {
    const {cartList,  clearCartList, deleteItem} = useCartContext();
    console.log(cartList)

    return (
        <div className="">
        <div className="m-5 align-items-center d-flex flex-wrap">
            {cartList.map (product => (
                <div key={product.id} className="card w-50 p-2">
                    <div className="d-flex">
                    <img className="w-50 align-self-start m-2" src={product.img} alt="imagen"/>
                    <div className="d-flex flex-column align-items-start justify-content-center">
                    <label className="ms-5">Precio: €{product.price} </label>
                    <label className="ms-5 ">Cantidad: {product.quantity}</label>
                    </div>
                    </div>                   
                    <button className="btn btn-primary mt-4" onClick={() => deleteItem(product.id)}> Eliminar productos</button>
                </div>
            ))}
        </div>
            <div>
                {
                    (cartList.length > 0 ) 
                    ?
                        <div>
                            <Link to='/' onClick={clearCartList} className="btn btn-outline-danger ms-5">Vaciar Carrito</Link>
                            <Link to='/checkout' className="btn btn-outline-success ms-5">Finalizar Compra</Link>
                        </div>
                    :
                        <div>
                            <button onClick={clearCartList} className="btn btn-outline-danger ms-5" hidden >Vaciar Carrito</button>
                            <button className="btn btn-outline-success ms-5" hidden>Finalizar Compra</button>
                        </div>
                }

            </div>
        </div>
    )
}
