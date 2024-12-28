import './ContactMe.css'; 
import logo from "../../../assets/images/Experiences/Logo_Glory.jpeg";
import { Header } from '../../Layouts/Header/Header';

export const ContactMe = () => {
  return (
    <>
      <Header />
      <div className="contact-me">
        <img src={logo} alt="Logo" className="contact-logo" />
        <h2>Contáctame</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Enviar</button>
        </form>
      </div>
    </>
  );
};



