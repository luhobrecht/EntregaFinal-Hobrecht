export const CartWidget = ({quantity}) => {
  
  return (
       <div className ='cart-widget d-flex mt-3 text-decoration-none'>
          <i className="bi bi-cart-fill me-1"></i>
          <p className='cart-number'>{quantity}</p>
       </div>
  )
};