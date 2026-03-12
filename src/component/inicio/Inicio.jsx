import React from "react";
import "./Inicio.css";
import Seccion from "../secciones/Seccion";
import Seccion1 from "../seccion1/Seccion1";
import Seccion2 from "../seccion2/Seccion2";

function Inicio() {
  return (
    <div className="inicio_contenedor">
      <Seccion />
      <Seccion1 />
      <div style={{ width: "50%" }}>
        <figure
          className="figure_seccion"
        >
          <p>Nota importante.</p>
          <figcaption>
            — No compres nunca una versio Slim, Mini, Lite ya que no son
            modificables y su vida util llega a ser muy corta si es gama alta y
            no estas buscando ahorro no te deberia preocupar eso
          </figcaption>
        </figure>
      </div>
      <Seccion2 />
      <div style={{ width: "50%" }}>
        <figure
        className="figure_seccion"
          
        >
          <p>Nota importante.</p>
          <figcaption>
            — Ya si quieres comprar una Mac eso ya es otro tema ya que no estas
            interesado en ahorro. y si quieres un consejo para comprarte una{" "}
            <b>
              nunca compres una que su fecha de lanzamiento ya lleve mas de 7
              años{" "}
            </b>
            ya que Mac inabilita su actualizaciones automaticas y de seguridad y
            esto es lo hace a Mac una marca muy buscada su seguridad.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Inicio;
