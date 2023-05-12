
import { useState } from "react"
import { Link } from "react-router-dom";


export const CheckOutForm = ({createOrder}) => {
    const [userData, setUserData] = useState({
        name: '',
        phone: '',
        email: '',
        emailConfirmation: '',
    });

    const handleOnChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });

    };

    const handleOnSubmit = (event) => {
      event.preventDefault();
      createOrder(userData);
    };



  return (
    <>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h5 className="mt-5 mb-5 fs-3">Ingrese sus datos:</h5>
        <form onSubmit={handleOnSubmit} className="d-flex align-items-center">
          <div className="mb-3 ms-5 w-100">
            <label className="form-label">Nombre</label>
            <input 
              type="text" 
              className="form-control" 
              onChange={handleOnChange} 
              value={userData.name}
              name="name" 
              aria-describedby="name" 
              required
            />
            <hr className="mt-0"></hr>
            <label className="form-label">Número telefónico</label>
            <input 
              type="number" 
              className="form-control" 
              onChange={handleOnChange}
              value={userData.phone}
              name="phone" 
              aria-describedby="number" 
              maxLength="10"
              required
            />
            <hr className="mt-0"></hr>
            {
             (userData.email !== userData.emailConfirmation) &&
              <p className="text-danger">Los correos no coinciden</p>
            }
            <label className="form-label">Correo electrónico</label>
            <input 
              type="email" 
              className="form-control" 
              onChange={handleOnChange}
              value={userData.email}
              name="email" 
              aria-describedby="email" 
              required
            />
            <hr className="mt-0"></hr>
            <label for="emailConfirmation" className="form-label">Repita su correo electrónico</label>
            {
             (userData.email !== userData.emailConfirmation) &&
              <p className="text-danger">Los correos no coinciden</p>
            }
            <input 
              type="email" 
              className="form-control" 
              onChange={handleOnChange}
              value={userData.emailConfirmation}
              name="emailConfirmation" 
              aria-describedby="email-confirmation"
              required 
            />
            <hr className="mt-0"></hr>
            <Link to='/cart' className='btn btn-dark mt-4 ms-2 me-2'>Atrás</Link>
            <button className="btn btn-primary mt-4">Finalizar</button>
          </div>
        </form>
      </div>
    </>
  )
}
