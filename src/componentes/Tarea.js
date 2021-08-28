//Importando librerias y iconos
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faEdit,
  faSquare,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
// funcion para manipular las tareas editarlas, eliminarlas y marcarlas como completadas
const Tarea = ({ tarea, toggleCompletada, editarTarea, borrarTarea }) => {
  //estados para crear una nueva tarea y editar las tareas
  const [editandoTarea, cambiarEditandoTarea] = useState(false);
  const [nuevaTarea, CambiarNuevaTarea] = useState(tarea.texto);
  //funcion para editar las tareas
  const handleSubmit = (e) => {
    e.preventDefault();
    editarTarea(tarea.id, nuevaTarea);
    cambiarEditandoTarea(false);
  };

  return (
    <li className="lista-tareas__tarea">
      {/*comprobando la tarea esta completada o no para cambiar el icono de esta */}
      <FontAwesomeIcon
        icon={tarea.completada ? faCheckSquare : faSquare}
        className="lista-tareas__icono lista-tareas__icono-check"
        onClick={() => toggleCompletada(tarea.id)}
      />
      {/*Comprobando que se le dio click al icono de editar para mostrar o ocultar el formulario de editar */}
      <div className="lista-tareas__texto">
        {editandoTarea ? (
          <form
            action=""
            className="formulario-editar-tarea"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="formulario-editar-tarea__input"
              value={nuevaTarea}
              onChange={(e) => CambiarNuevaTarea(e.target.value)}
            />
            <button type="submit" className="formulario-editar-tarea__btn">
              Actualizar
            </button>
          </form>
        ) : (
          tarea.texto
        )}
      </div>
      <div className="lista-tareas__contenedores-botones">
        {/*icono de editar tarea */}
        <FontAwesomeIcon
          icon={faEdit}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => {
            cambiarEditandoTarea(!editandoTarea);
          }}
        />
        {/*icono de eliminar tarea */}
        <FontAwesomeIcon
          icon={faTimes}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => borrarTarea(tarea.id)}
        />
      </div>
    </li>
  );
};
//exportando componente Tarea
export default Tarea;
