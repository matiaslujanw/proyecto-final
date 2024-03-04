import React from 'react';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="about-section">
        <h2 className="section-title">La Empresa</h2>
        <p>
          Devani Contadores es una empresa familiar de consultoría impositiva, laboral y societaria con más de 30 años en el mercado, siendo dirigida hoy por su segunda generación. Somos un equipo comprometido con la transparencia, el trabajo en equipo, la responsabilidad y el aprendizaje continuo. Nuestra misión es proveer servicios de calidad y precios justos para ayudar a las empresas de la región a mejorar su desempeño en el mercado.
        </p>
        <p>
          En un mundo empresarial cada vez más competitivo, es fundamental contar con un equipo de expertos en consultoría que pueda ofrecer soluciones personalizadas y efectivas. Nuestra empresa cuenta con años de experiencia y conocimiento en las áreas impositiva, laboral y societaria, lo que nos permite brindar una asesoría integral y personalizada a nuestros clientes.
        </p>
      </section>

      <section className="services-section">
        <h2 className="section-title">Nuestros Servicios</h2>
        <ul className="services-list">
          <li>Asesoramiento impositivo Nacional</li>
          <li>Planificación de Régimen impositivo</li>
          <li>Monotributistas</li>
          <li>Autónomos - Responsables inscriptos</li>
          <li>Sociedades Comerciales - Responsables inscriptas</li>
          <li>Ingresos Brutos - Convenio Multilateral</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;