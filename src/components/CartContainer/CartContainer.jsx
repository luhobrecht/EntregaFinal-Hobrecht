import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext"
import { useEffect } from "react";

export const CartContainer = (selection) => {
    const {cartList,  clearCartList, deleteItem, total, handleTotal} = useCartContext();

    useEffect(() => {
        handleTotal();
    }, [cartList]);

    return (
        <>
        { (cartList.length !== 0) 
        ?
        <div className="cartContainer">
            <div className="cart-list m-5 align-items-center d-flex flex-column">
                {cartList.map (product => (
                    <div key={product.id} className="cart-container alert alert-primary w-100 p-4 d-flex justify-content-around align-items-center">
                        <div className="description">{product.description}</div>
                        <div className="color">{product.color.toUpperCase()}</div>
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
            <div className='container d-flex justify-content-evenly buttons-container'>    
                <Link to='/' className="btn btn-outline-dark text-decoration-none mb-1"> Seguir comprando </Link>
                <Link to='/' onClick={clearCartList} className="btn btn-outline-danger mb-1">Vaciar Carrito</Link>
                <Link to='/checkout' className="btn btn-success mb-1">Finalizar Compra</Link>      
            </div>
        </div>
        :
        <div className="empty-cart-container container d-flex flex-column text-center">
            <p className="mt-5 alert alert-warning">¡No hay productos en el carrito!</p>
            <Link to='/' className="btn btn-dark text-decoration-none w-20 align-self-end"> Seguir comprando </Link>
        </div>
        }
        </>
    )
};
