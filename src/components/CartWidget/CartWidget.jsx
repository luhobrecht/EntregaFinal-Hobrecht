import { useCartContext } from "../../context/CartContext";


export const CartWidget = ({}) => {
  const {handleCartWidget} = useCartContext();
 
  return (
       <div className ='cart-widget d-flex text-decoration-none mt-1'>
          <i className="icon bi bi-cart-fill me-1"></i>
          <p className='cart-number me-1 mt-1'>{handleCartWidget() !== 0 && handleCartWidget()}</p>
       </div>
  )
};