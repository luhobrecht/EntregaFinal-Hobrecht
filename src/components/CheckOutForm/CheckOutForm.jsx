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
            <label className="form-label" id='form-label-checkout'>Nombre</label>
            <input 
              type="text" 
              className="form-control"
              id='form-control-checkout' 
              onChange={handleOnChange} 
              value={userData.name}
              name="name" 
              aria-describedby="nameHelp" 
              required
            />
            <hr className="mt-0 mb-0"></hr>
            <div id="nameHelp" className="form-text mb-4">Ingresa tu nombre</div>
            <label className="form-label" id='form-label-checkout'>Teléfono</label>
            <input 
              type="tel" 
              className="form-control" 
              id='form-control-checkout'
              onChange={handleOnChange}
              value={userData.phone}
              name="phone" 
              aria-describedby="phoneHelp" 
              maxLength= '9'
              required
            />
            <hr className="mt-0 mb-0"></hr>
            <div id="phoneHelp" className="form-text mb-4">Ingresa tu número telefónico</div>
            <label className="form-label" id='form-label-checkout'>Correo electrónico</label>
            <input 
              type="email" 
              className="form-control" 
              id='form-control-checkout'
              onChange={handleOnChange}
              value={userData.email}
              name="email" 
              aria-describedby="emailHelp" 
              required
            />
            <hr className="mt-0 mb-0"></hr>
            <div id="emailHelp" className="form-text mb-4">Ingresa tu correo electrónico</div>
            <label className="form-label" id='form-label-checkout'>Repita su correo electrónico</label>
            <input 
            type="email" 
            className="form-control" 
            id='form-control-checkout'
            onChange={handleOnChange}
            value={userData.emailConfirmation}
            name="emailConfirmation"
            required 
            />
            <hr className="mt-0 "></hr>
            {
              (userData.email !== userData.emailConfirmation) ?
            <>
            <p className="text-danger">El correo electrónico no coincide.</p> 
            <Link to='/cart' className='btn btn-dark mt-4 ms-2 me-2'>Atrás</Link>
            <button className="btn btn-primary mt-4 disabled">Finalizar</button>
            </>
          :
            <>
            <Link to='/cart' className='btn btn-dark mt-4 ms-2 me-2'>Atrás</Link>
            <button className="btn btn-primary mt-4">Finalizar</button>
            </>
          }
          </div>
        </form>
      </div>
    </>
  )
}
