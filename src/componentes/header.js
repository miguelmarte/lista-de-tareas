//Importando librerias y iconos
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
//funcion para combiar el estado para mostrar o no mostrar las tareas completadas
const Header = ({ mostrarCompletadas, CambiarMostarCompletadas }) => {
  const toggleCompletadas = () => {
    CambiarMostarCompletadas(!mostrarCompletadas);
  };
  return (
    //header de la app
    <header className="header">
      <h1 className="header__titulo">Lista de Tareas</h1>
      {/*condicional para saber si el boton a mostrar es el de las tareas completas o el de las no completadas*/}
      {mostrarCompletadas ? (
        <button className="header__boton" onClick={() => toggleCompletadas()}>
          No mostrar completadas
          <FontAwesomeIcon icon={faEyeSlash} className="header__icono-boton" />
        </button>
      ) : (
        <button className="header__boton" onClick={() => toggleCompletadas()}>
          Mostrar completadas
          <FontAwesomeIcon icon={faEye} className="header__icono-boton" />
        </button>
      )}
    </header>
  );
};
//exportando componente Header
export default Header;
