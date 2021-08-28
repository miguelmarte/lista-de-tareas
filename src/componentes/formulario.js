//Importando librerias y iconos
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import uuid from "react-uuid";
//funcion para el formulario de las tareas
const FormularioTareas = ({ tareas, cambiarTareas }) => {
  const [inputTarea, cambiarInputTarea] = useState("");
  const handleInput = (e) => {
    cambiarInputTarea(e.target.value);
  };
  //funcion para crear una nueva tarea
  const handleSubmit = (e) => {
    e.preventDefault();
    cambiarTareas([
      ...tareas,
      { id: uuid(), texto: inputTarea, completada: false },
    ]);
    cambiarInputTarea("");
  };

  return (
    //formulario de las tareas
    <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
      <input
        type="text"
        className="formulario-tareas__input"
        placeholder="Escribe una tarea"
        value={inputTarea}
        onChange={(e) => handleInput(e)}
      />
      {/*boton del formulario*/}
      <button type="submit" className="formulario-tareas__btn">
        <FontAwesomeIcon
          icon={faPlusSquare}
          className="formulario-tareas__icono-btn"
        />
      </button>
    </form>
  );
};
//exportando componente formulario
export default FormularioTareas;
