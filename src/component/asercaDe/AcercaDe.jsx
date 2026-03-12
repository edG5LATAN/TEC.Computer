import React from "react";
import "./AcercaDe.css";

function AcercaDe() {
  return (
    <div className="acerca-container">
      <div className="acerca_de_sucontainer">
        <div className="acerca-header">
          <h1 className="acerca-title">
            Tu amigo en el mundo de la tecnología
          </h1>
          <div className="acerca-divider"></div>
        </div>

        <div className="acerca-intro">
          <p className="acerca-intro-text">
            Sabemos lo abrumador que puede ser elegir una computadora hoy en
            día. Entre tantas marcas, modelos, procesadores y siglas técnicas,
            es fácil sentirse perdido o terminar gastando dinero en algo que no
            cumple lo que promete.
          </p>
          <p className="acerca-intro-text acerca-intro-highlight">
            Por eso nació este proyecto: para ser esa guía confiable que te
            ayude a tomar la mejor decisión informática sin dolores de cabeza.
          </p>
        </div>

        <div className="acerca-grid">
          <div className="acerca-card">
            <h2 className="acerca-card-title">
              Más que vendedores, somos asesores
            </h2>
            <p className="acerca-card-text">
              A diferencia de una tienda convencional, nosotros no estamos aquí
              para "colocarte" el producto más caro. Nuestra misión es{" "}
              <span className="acerca-highlight">
                escucharte, entender tus necesidades y tu presupuesto
              </span>
              , y luego recomendarte el equipo que realmente te sirva.
            </p>
          </div>

          <div className="acerca-card">
            <h2 className="acerca-card-title">+10 años de experiencia</h2>
            <p className="acerca-card-text">
              Detrás de esta web hay más de{" "}
              <span className="acerca-highlight">
                10 años de experiencia como técnico en computación y
                mantenimiento
              </span>
              . Hemos visto de todo: desde equipos que duran una década porque
              fueron bien elegidos, hasta computadoras nuevas que fallan a los
              meses por una mala decisión de compra.
            </p>
          </div>
        </div>

        <div className="acerca-valores">
          <h2 className="acerca-section-title">Lo que nos importa</h2>
          <p className="acerca-section-subtitle">
            Cuando te asesoramos, no miramos solo la tarjeta de presentación del
            producto. Analizamos a fondo lo que realmente importa para que tu
            inversión valga la pena:
          </p>

          <div className="acerca-valores-grid">
            {/* Tarjeta 1 */}
            <div className="acerca-valor-card">
              <div className="acerca-valor-emoji">🔧</div>
              <h3 className="acerca-valor-title">Calidad y durabilidad</h3>
              <p className="acerca-valor-text">
                Que los materiales y el ensamblaje garanticen que el equipo te
                acompañe por años.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="acerca-valor-card">
              <div className="acerca-valor-emoji">⚡</div>
              <h3 className="acerca-valor-title">Capacidad de actualización</h3>
              <p className="acerca-valor-text">
                Que no quede obsoleto en seis meses y puedas mejorar sus
                componentes a futuro.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="acerca-valor-card">
              <div className="acerca-valor-emoji">💰</div>
              <h3 className="acerca-valor-title">Precio-rendimiento</h3>
              <p className="acerca-valor-text">
                Que cada Lempira invertido se traduzca en beneficio real para tu
                día a día.
              </p>
            </div>
          </div>
        </div>

        {/* Cómo ayudamos */}
        <div className="acerca-ayuda">
          <h2 className="acerca-section-title">¿Cómo te ayudamos?</h2>
          <p className="acerca-ayuda-text">
            Te ofrecemos{" "}
            <span className="acerca-highlight">
              asesoramiento online personalizado
            </span>
            . Ya sea que estés empezando en el mundo de la programación,
            necesites una laptop para la facultad, busques una estación de
            trabajo para diseñar o simplemente quieras una PC familiar para
            navegar, estamos para ayudarte a elegir con confianza.
          </p>
          <p className="acerca-ayuda-text">
            No vendemos humo. Vendemos conocimiento para que compres bien.
          </p>
        </div>

        {/* Call to Action */}
        <div className="acerca-cta">
          <p className="acerca-cta-text">
            <span className="acerca-cta-bold">¿Tienes dudas?</span>{" "}
            <a href="/contacto" className="acerca-cta-link">
              Contáctanos aquí
            </a>{" "}
            y cuéntanos qué estás buscando. Estaremos encantados de guiarte.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AcercaDe;
