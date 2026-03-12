import React from "react";
import "./Seccion.css";

function Seccion() {
  return (
    <div className="seccion_contenedor">
      <h1>Deseo comprar mi primera computadora</h1>
      <div className="acerca-divider"></div>
     <div style={{padding:"10px 0"}}></div>
      <h3>que marca modelo o tipo elegir</h3>
      <p>
        Al momento de querer hacer nuestra <b>primera</b> compra de una
        computadora, nos enfrentamos a un desafío muy común: la dificultad de
        elegir correctamente la marca, el modelo y el tipo de equipo. Este es un
        problema común que afecta a muchas personas que buscan una herramienta
        para estudio, trabajo o entretenimiento, ya que el mercado se encuentra
        saturado de muchos modelos, precios y ofertas; esta saturación de
        opciones genera una confusión inevitable. El bombardeo publicitario y
        las especificaciones técnicas complejas suelen empujar al consumidor
        hacia equipos de gama alta que superan con creces sus necesidades
        reales, resultando en una inversión ineficiente y un gasto de dinero
        innecesario.
        <br />
        <br />
        Esta problemática se debe, en gran medida, a la falta de conocimiento
        claro al ser nuestro primer equipo y enfrentarnos a tantos términos
        técnicos. Muchas veces, el usuario termina pagando por un diseño o
        equipo de gama alta con funciones especializadas —como tarjetas gráficas
        de alto rendimiento o procesadores de última generación— que jamás
        llegará a aprovechar en tareas cotidianas como la redacción de textos o
        la navegación web. Por ello, entender la relación entre el rendimiento
        del hardware y el uso personal es fundamental para poder hacer una buena
        compra sin excedernos en nuestro presupuesto ni realizar gastos
        innecesarios. De lo contrario, el proceso de compra se convierte en un
        laberinto donde el precio más alto se confunde erróneamente con la mejor
        opción para el usuario, dejando de lado la eficiencia y el ahorro
        inteligente.
      </p>
      <img src="./img/inicio/computadoras.png" alt="" />
    </div>
  );
}

export default Seccion;
