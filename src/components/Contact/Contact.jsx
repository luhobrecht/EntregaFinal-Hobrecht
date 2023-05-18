import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { ContactForm } from "../ContactForm/ContactForm";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [contactNumber, setContactNumber] = useState(0);
  const [isContact, setIsContact] = useState(false);

  const createContact = (contactData) => {
    setLoading(true);
    
    const contact = {
      ...contactData,
    };
    
    const db = getFirestore();
    const contactCollection = collection(db, 'contacts');
    
    addDoc(contactCollection, contact)
      .then(res => setContactNumber(res.id))
      .catch(err => console.log(err))
      .finally(() => {
        setTimeout(() => {
            setLoading(false)
            setIsContact(true)
          }, 3000)
        }
      )
    };


  return (
    <>
      <div className="container mt-5 d-flex justify-content-center flex-column">
        <div className="fs-3 align-self-center mb-3">
          <h3>Contáctanos</h3>
        </div>
          { !isContact && !contactNumber
          ?
            <ContactForm createContact={createContact} />
          :
            (
              <div className="">
                <h4 className="text-center">¡Tu consulta se ha enviado! Alguien de nuestro equipo se pondrá en contacto contigo.</h4>
                <h4 className="text-center">Tu número de consulta es #{contactNumber}</h4>
              </div>
            )
          }
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
};
