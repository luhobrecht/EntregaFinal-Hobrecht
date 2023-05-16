export const Contact = () => {
  return (
    <>
    <div className="container mt-5 d-flex justify-content-center flex-column">
        <div className="fs-3 align-self-center mb-3">
          <h3>Contáctanos</h3>
        </div>
      <form className="card d-flex justify-content-end flex-column w-100">
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="name" aria-describedby="nameHelp" />
            <div id="nameHelp" className="form-text">Ingresa tu nombre</div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">Ingresa tu correo electrónico</div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Mensaje</label>
            <textarea className="form-control" id="message" rows="3"></textarea>
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-primary w-25">Enviar</button>
        </div>
      </form>
    </div>
    <div className='contact container mt-5 d-flex flex-column'>
      <h3 className="fs-5 align-self-end">También puedes encontrarnos en:</h3>  
      <div className="d-flex align-self-end">
      <i className="bi bi-instagram fs-3 me-3"></i>
      <i className="bi bi-facebook fs-3 me-3"></i>
      <i className="bi bi-twitter fs-3 me-3"></i>
      <i className="bi bi-whatsapp fs-3"></i>
      </div> 
    </div>
    </>
  )
}
