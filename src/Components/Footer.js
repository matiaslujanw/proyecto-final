import React from 'react';
import '../styles/footer.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import fotoLog from '../Assets/logo.png';


const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-section" marginleft='0'>
         < img src={fotoLog} alt="logo" style={{width: '15%'}}></img> 
        <img src='' alt='' />
      </div>
      <div className="footer-section">
        <h6>Horarios de atención</h6>
        <p>Lun a Vie 8:00-13:00hs - 16:00-20:00hs</p>
      </div>
      <div className="footer-section">
        <h6>Contacto</h6>
        <p><FaEnvelope /> info@empresa.com</p>
        <p><FaPhone /> 3814469128</p>
      </div>
    </footer>
  );
};

export default Footer;
