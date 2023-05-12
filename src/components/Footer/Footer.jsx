export const Footer = () => {
    return (
      <footer>
          <div className="row m-5 mb-0 align-items-start justify-content-around">
              <div className="footer-item col-lg-3 p-3 mt-4">
                <h5>Cuentas</h5>
                <p>Mi cuenta</p>
                <p>Gestionar cuentas</p>
                <p>Soporte técnico</p>
              </div>
              <div className="footer-item col-lg-3 p-3 mt-4">
                <h5>Legales</h5>
                <p>Bases y condiciones</p>
                <p>Métodos de pago</p>
                <p>Cheques Regalos</p>
                <p>Saber más</p>
              </div>
              <div className="footer-item col-lg-3 p-3 mt-4">
                <h5>Geeks</h5>
                <p>Contacto</p>
                <p>Sobre nosotros</p>
                <p>Trabaja con nosotros</p>
                <p>Ayuda</p>
              </div>
              <hr></hr>
          </div>
              <div className="social-media d-flex justify-content-between p-3">
                <div className="ms-5">
                    <i className="bi bi-instagram fs-3 me-3"></i>
                    <i className="bi bi-facebook fs-3 me-3"></i>
                    <i className="bi bi-twitter fs-3 me-3"></i>
                    <i className="bi bi-whatsapp fs-3"></i>
                </div>
                <p className="text-end mb-3 me-5 developed">2023 | Desarrollado por Lucía ✨ </p>
              </div>
      </footer>
      
    )
};