import React from "react";
import "./Header.css";
import Squares from "../reactBits/squares/Squares";
import { useNavigate } from "react-router-dom";

function Header() {

  const navegarLink= useNavigate();

  return (
    <div className="header_contenedor">
      <Squares
        className="header_square"
        speed={0.5}
        squareSize={40}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#fff"
        hoverFillColor="#222"
        direction="diagonal"
        borderColor="#271E37"
        hoverColor="#222222"
        size={40}
      />
      <div className="header_logos">
        <div className="header_imagen">
          <img src="./img/logo2.png" alt="logo de inicio" />
        </div>
        <div className="header_name">
          <h1>Tecnologia a tu alcance</h1>
        </div>
      </div>
      <nav>
        <button onClick={()=>navegarLink("/")} >Estudio</button>
        <button onClick={()=>navegarLink("/gaming")} >Gaming</button>
        <button onClick={()=>navegarLink("/streaming")}>Streamer</button>
        <button onClick={()=>navegarLink("/acercaDe")} >acerca de </button>
      </nav>
    </div>
  );
}

export default Header;
