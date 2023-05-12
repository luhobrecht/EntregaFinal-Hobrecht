import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext"
import { useEffect } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const CartContainer = () => {
    const {cartList,  clearCartList, deleteItem, total, handleTotal} = useCartContext();

    useEffect(() => {
        handleTotal();
    }, [cartList]);
    

    return (
        <>
        { (cartList.length !== 0) 
        ?
        <div className="">
            <div className="cart-list m-5 align-items-center d-flex flex-column">
                {cartList.map (product => (
                    <div key={product.id} className="cart-container alert alert-primary w-100 p-4 d-flex justify-content-around align-items-center">
                            {/* <img className="product-image w-50 align-self-center m-2" src={product.img[0]} alt="imagen"/> */}
                                    <div className="description">{product.description}</div>
                                    <div className="price">Precio por unidad: {product.price}€ </div>
                                    <div className="quantity">Cantidad: {product.quantity}</div>
                                    <button className="delete btn btn-outline-secondary" onClick={() => deleteItem(product.id)}> Eliminar productos</button>                  
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center me-5 mb-5">
                <div className="total-container fs-3 alert alert-secondary d-flex">
                    <p className="total me-2 ">TOTAL: </p> 
                    <p className="">€{ total }</p>
                </div> 
            </div>
            <div className='container d-flex justify-content-center'>    
                <Link to='/' className="btn btn-outline-dark text-decoration-none ms-5"> Seguir comprando </Link>
                <Link to='/' onClick={clearCartList} className="btn btn-outline-danger ms-5">Vaciar Carrito</Link>
                <Link to='/checkout' className="btn btn-success ms-5">Finalizar Compra</Link>      
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
