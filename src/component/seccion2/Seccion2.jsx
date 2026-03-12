import React from "react";
import "./Seccion2.css";

function Seccion2() {
  return (
    <div className="seccion2_contenedor">
      <h3>Carreras Tecnicas</h3>
      <p>
        Para los estudiantes de carreras referentes a tecnologia y computacion
        en colegios y en universidad para arquitecturas o ingenierias ya se
        nesecita tener otro tipo de requerimientos tecnicos para poder hacer una
        compra inteligente como su rendimiento y su durabilidad en referencia al
        tiempo que se desea utilizar.
        <br />
        <br />
        Los requerimientos minimos que se deben tener esencialmente son basico y
        simples como para el anterior caso una computadora portatil para su
        mejor manejo y mobilidad pero que siga siendo modificable o actualizable
        en sus componentes de memoria RAM y de Disco duro.
        <br />
        <br />
        <b>Memoria RAM</b> en la mayoria de marcas a nivel de fabrica aveces
        solo traen un espacio de memoria pero que si es modificable para poder
        actualizarla al doble de su capacidad o en unos casos llega a tener dos
        espacios de memoria Ram para hacerla aun mas rapida.
        <br />
        <br />
        <b>Disco duro</b> lo mismo pasa en su unidad de disco duro los modelos
        recientes ya cuenta con discos duros de estado solido(no todos los
        modelos) y tambien llegan hasta tener un espacio para SSD NVMe que solo
        es un disco duro solido pero aun mas rapido y eficiente que el SSD
        SOLIDO normal.
        <br />
        <br />
        En este punto de eleccion ya tenemos mas marcas que nos brindan ese tipo
        de computadora ideal para elegir y que cumplen con su proposito y su
        utilidad que serian ya marcas como <b>Lenovo</b> con sus Thinkpad las Dell con
        sus vostron y Latitude, Hp EliteBook, ProBook y ZBook.
        <br />
        <br />
        <div className="seccion1_imagenes">
          <img src="./img/logosMarcas/lenovo.jpg" alt="computadora marca" />
        <img src="./img/logosMarcas/dell.png" alt="computadora portatil" />
        <img src="./img/logosMarcas/hp.png" alt="computadora portati" />
        <img src="./img/logosMarcas/toshiba.png" alt="computadora portati" />
      </div>
        <br />
        <br />
        Para poder hacer una compra mas simple aca te dejo una tabla de
        requerimientos que debe de tener y asi no perderte en el intento y no
        tener que fracasar al intentar ahorrar y tener que estar luchando con
        una maquina que es demasiado lenta que no tiene espacio.
        <br />
        <br />
      </p>
      <div className="seccion1_table">
        <table>
          <tr>
            <td>Memoria Ram</td>
            <td>8GB</td>
            <td>Expandible</td>
            <td>minimo</td>
          </tr>
          <tr>
            <td>Disco duro</td>
            <td>512GB</td>
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
            <td>segun requiera</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Trajeta grafica</td>
            <td>NVIDIA RTX4060</td>
            <td>Arquitectura</td>
            <td>minimo</td>
          </tr>
          <tr>
            <td>Trajeta grafica</td>
            <td>NVIDIA RTX4060</td>
            <td>Ingenieria</td>
            <td>minimo</td>
          </tr>
          <tr>
            <td>Bateria</td>
            <td>5000mAh o mas</td>
            <td>minimo</td>
            <td>-</td>
          </tr>
        </table>

      </div>
    </div>
  );
}

export default Seccion2;
