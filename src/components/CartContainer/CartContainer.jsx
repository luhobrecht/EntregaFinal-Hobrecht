import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext"
import { useEffect } from "react";

export const CartContainer = () => {
    const {cartList,  clearCartList, deleteItem, total, handleTotal, handleCartWidget, cartWidget} = useCartContext();

    useEffect(() => {
        handleTotal();
    }, [cartList]);


    return (
        <>
         { (cartList.length > 0) 
         ?
        <div className="">
        <div className="m-5 align-items-center d-flex flex-wrap">
            {cartList.map (product => (
                <div key={product.id} className="card w-50 p-2 container-card">
                    <div className="d-flex">
                    <img className="w-50 align-self-start m-2" src={product.img} alt="imagen"/>
                    <div className="d-flex flex-column align-items-start justify-content-center">
                    <label className="ms-5">Precio: {product.price}€ </label>
                    <label className="ms-5 ">Cantidad: {product.quantity}</label>
                    </div>
                    </div>                   
                    <button className="btn btn-secondary mt-4" onClick={() => deleteItem(product.id)}> Eliminar productos</button>
                </div>
            ))}
        </div>
            <div className="d-flex justify-content-end me-5 pb-4">
               <div className="total fs-4 alert alert-secondary d-flex">
                <b className="ms-4 align-self-center">TOTAL:</b> 
                <p className="me-4 align-self-center mb-0">€{ total }</p>
                </div> 
            </div>
            <div className='container d-flex justify-content-center'>
                {
                    (cartList.length > 0 ) 
                    ?
                        <div className="">
                            <Link to='/' className="btn btn-dark text-decoration-none ms-5"> Seguir comprando </Link>
                            <Link to='/' onClick={clearCartList} className="btn btn-danger ms-5">Vaciar Carrito</Link>
                            <Link to='/checkout' className="btn btn-success ms-5">Finalizar Compra</Link>
                        </div>
                    :
                        <div>
                            <Link to='/' className="btn btn-success text-decoration-none ms-5 "> Seguir comprando </Link>
                            <button onClick={clearCartList} className="btn btn-danger ms-5" hidden >Vaciar Carrito</button>
                            <button className="btn btn-dark ms-5" hidden>Finalizar Compra</button>
                        </div>
                }
            </div>
        </div>
            :
            <div className="container text-center">
                <p className="m-5 alert ">
                ¡El carrito de compras está vacío!   
                </p>
                <div className="d-flex justify-content-end">
                <Link to='/' className="btn btn-dark text-decoration-none ms-5 "> Seguir comprando </Link>
                </div>
            </div>
            }
        </>
    )
}
