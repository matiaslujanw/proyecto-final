import React from 'react';
import '../styles/cotizacion.css';

const Cotizacion = () => {
  return (
    <div className="cotizacion-container">
      <h1>Cotización</h1>
      <div className="cotizacion-content">
        <p>Preguntas para la cotización</p>
        <form className="cotizacion-form" action="/action_page.php">
          <label htmlFor="fname">Nombre, Apellido</label>
          <input type="text" id="fname" name="firstname" placeholder="Nombre completo" />
          <label htmlFor="lname">Empresa o entidad</label>
          <input type="text" id="lname" name="lastname" placeholder="Entidad que desea cotización" />
          <label htmlFor="mail">Mail</label>
          <input type="text" id="mail" name="mail" placeholder="@..." />
          <label htmlFor="categoria">Categoría</label>
          <select id="categoria" name="categoria">
            <option value="OpA">Monotributista</option>
            <option value="OpB">Responsable inscripto</option>
            <option value="OpC">Exento</option>
          </select>
          <label htmlFor="descripcion">Descripción de la consulta</label>
          <textarea id="descripcion" name="descripcion" placeholder="Describa su consulta.." />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default Cotizacion;