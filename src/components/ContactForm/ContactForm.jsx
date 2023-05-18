import { useState } from "react";

export const ContactForm = ({createContact}) => {
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
    });

    const handleOnChange = (event) => {
            if (event.target.tagName === "SELECT") {
            setContactData({
              ...contactData,
              subject: event.target.value ? event.target.value : "devolutions",
            });
          } else {
            setContactData({
              ...contactData,
              [event.target.name]: event.target.value,
            });
          }
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        createContact(contactData);
    };

    return (
    <>
        <form 
        onSubmit={handleOnSubmit}
        className="card d-flex justify-content-end flex-column w-100"
        >
            <div className="card-body">
                <div className="mb-3">
                    <label 
                    className="form-label"
                    >
                        Nombre
                    </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    onChange = {handleOnChange}
                    value = {contactData.name}
                    name="name"
                    aria-describedby="nameHelp" 
                    required
                    />
                    <div id="nameHelp" className="form-text">Ingresa tu nombre</div>
                </div>
                <div className="mb-3">
                    <label 
                    className="form-label"
                    >
                        Correo electrónico
                    </label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    onChange = {handleOnChange}
                    value = {contactData.email}
                    name="email"
                    aria-describedby="emailHelp" 
                    required
                    />
                    <div id="emailHelp" className="form-text">Ingresa tu correo electrónico</div>
                </div>
                <div className="mb-3">
                <select 
                    className="select p-2 mt-3 text-dark"
                    value={contactData.subject} 
                    onChange={handleOnChange}
                    name="subject"
                    >
                      <option
                      value= {undefined}
                      >
                        Selecciona un asunto
                      </option>
                      <option 
                      value='devolutions'
                      >
                        Devoluciones
                      </option>
                      <option 
                      value='replacements'
                      >
                        Reemplazos
                      </option>
                      <option 
                      value='page'
                      >
                        Problemas con la página
                      </option>
                      <option 
                      value='charges'
                      >
                        Cargos incorrectos
                      </option>
                      <option 
                      value='delivery'
                      >
                        Problemas con la entrega
                      </option>
                    </select>
                </div>
                <div className="mb-3">
                    <label 
                    className="form-label"
                    >
                        Dejá tu consulta
                    </label>
                    <textarea 
                    className="form-control" 
                    id="message" 
                    onChange = {handleOnChange}
                    value = {contactData.message}
                    name="message"
                    required
                    >
                    </textarea>
                </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-primary w-25">Enviar</button>
            </div>
        </form>
    </>
  )
}
