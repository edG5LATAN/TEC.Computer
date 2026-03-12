import React from "react";
import "./Seccion1.css";

function Seccion1() {
  return (
    <div className="seccion1_contenedor">
      <h2>Computadora para estudiantes</h2>
       <div className="acerca-divider"></div>
     <div style={{padding:"10px 0"}}></div>
    
      <h3>Carreras contables</h3>
      <p>
        Para estudiantes, tenemos dos tipos de computadoras que podemos adquirir
        con ciertas <b>especificaciones</b>, ya que existen diferencias entre
        los requerimientos de estudiantes de <b>colegio</b> y de{" "}
        <b>universidad</b>. En el caso de los estudiantes de colegio, podemos
        distinguir entre quienes cursan la carrera de Contabilidad y aquellos
        enfocados en <b>Tecnología y Computación</b>.
        <br />
        <br />
        Para los futuros <b>contadores</b>, el enfoque principal debe ser la
        <b>portabilidad</b> y un teclado completo que incluya un{" "}
        <b>bloque numérico</b>, facilitando así el ingreso de datos en hojas de
        cálculo complejas sin fatiga.
        <br />
        <br />
        Para los estudiantes de <b>universidad</b> que cursan carreras como{" "}
        <b>Contabilidad</b>, <b>Derecho</b> o <b>Psicología</b>, donde el
        trabajo principal se centra en la elaboración de documentación, informes
        y redacción de textos, es posible utilizar equipos con especificaciones
        similares, pero con un enfoque mayor en la ergonomía. En estas
        disciplinas, el uso intensivo del teclado es una constante, por lo que
        la eficiencia de taclado y la comodidad son claves para mantener la
        productividad durante largas jornadas de estudio. Un factor determinante
        para estos universitarios es contar con un <b>teclado</b> de buen
        recorrido y, de ser posible, <b>retroiluminado</b>, lo que facilita el
        trabajo en entornos de poca luz.
        <br />
        <br />
        Además, dado que suelen manejar múltiples fuentes de información
        simultáneamente —como bases de datos jurídicas, libros digitales y
        procesadores de texto—, se recomienda priorizar una pantalla con buena
        resolución para reducir la fatiga visual. De esta manera, el equipo no
        solo se convierte en una herramienta de escritura, sino en un centro de
        gestión de información donde la estabilidad del sistema y la comodidad
        física del usuario garantizan un rendimiento académico óptimo sin
        necesidad de invertir en <b>hardware</b> gráfico innecesario.
        <br />
        <br />
        El tema de cual elegir(su version fisica) es muy simple ya que la
        mayoria de colegios y universidades piden que puedan llevar sus
        computadoras a los centros de estudios para trabajar con ellas con esto
        lo mas comodo es tener una Laptop por su facilidad ala hora de
        movilizarce con ella, en referencia a marcas te recomiendo siempre
        comprar las marcas con mayor ventas en gama media que en este caso seria
        las <b>HP</b>, <b>Dell</b>, <b>Toshiba</b>.
        <br />
      </p>
      <div className="seccion1_imagenes">
        <img src="./img/logosMarcas/dell.png" alt="computadora portatil" />
        <img src="./img/logosMarcas/hp.png" alt="computadora portati" />
        <img src="./img/logosMarcas/toshiba.png" alt="computadora portati" />
      </div>

      <p>
        <b>Porque estas marcas</b> - estas marcas cuentan con una gama media y
        baja en computadoras que son buenas y faciles de actualizar con
        referencia a su capacidad de discos duros memorias ram modulos wifi y
        algunas hasta su procesador.
        <br />
        <br />
        Que sea <b>Windows</b> es primordial jamas comprar una{" "}
        <b>Chromebook </b>
        no por que sea mala, si no por su utilidad y la facilidad que te da las
        maquinas windows hace mas facil trabajar con ellas ya que la mayoria de
        centros de estudio te pediran tareas proyectos basados en
        <b> Windows, Office </b>. Donde el tiempo aveces es primordial.
        <br />
        <br />
      </p>

      <p>
        Que especificaciones minimas deberia tener-
        <br />
        <br />
        Aca te dejo una tabla de datos para que sean referencias ala hora de
        elegir el producto basandonos en un equipo donde podamos actualizarlo o
        modificarlo independientemente de los cambios que se hagan por
        Microsoft.
      </p>

      <div className="seccion1_table">
        <table>
          <tr>
            <td>Memoria Ram</td>
            <td>4GB</td>
            <td>Expandible</td>
            <td>minimo</td>
          </tr>
          <tr>
            <td>Disco duro</td>
            <td>260GB</td>
            <td>Disco Solido</td>
            <td>Minimo</td>
          </tr>
          <tr>
            <td>Windows</td>
            <td>10 o 11</td>
            <td>Activado</td>
            <td>Minimo</td>
          </tr>
          <tr>
            <td>Office</td>
            <td>2019 o mayor</td>
            <td>Activado</td>
            <td>Minimo</td>
          </tr>
          <tr>
            <td>Tamaño</td>
            <td>15.6 pulgadas</td>
            <td>minimo</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Teclado</td>
            <td>completo</td>
            <td>retroiluminado</td>
            <td>-</td>
          </tr>
        </table>
      </div>
      
      
    </div>
  );
}

export default Seccion1;
