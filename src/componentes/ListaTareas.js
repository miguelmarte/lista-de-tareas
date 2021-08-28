//Importando librerias y componentes
import React from "react";
import Tarea from "./Tarea";
//funcion para la lista de las tareas
const ListaTareas = ({ tareas, cambiarTareas, mostrarCompletadas }) => {
  //funcion para cambiar el estado de la tarea, si esta completada o no
  const toggleCompletada = (id) => {
    cambiarTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, completada: !tarea.completada };
        } else {
          return tarea;
        }
      })
    );
  };
  //funcion para editar la tarea
  const editarTarea = (id, nuevoTexto) => {
    cambiarTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, texto: nuevoTexto };
        } else {
          return tarea;
        }
      })
    );
  };
  //funcion para borrar la tarea
  const borrarTarea = (id) => {
    cambiarTareas(
      tareas.filter((tarea) => {
        if (tarea.id !== id) {
          return tarea;
        } else {
          return "";
        }
      })
    );
  };
  return (
    //retornando la lista de tareas y comprobando si se mostrara las no completadas o las completadas
    <ul className="lista-tareas">
      {/*comprobando que la lista no este vacia */}
      {tareas.length > 0 ? (
        tareas.map((tarea) => {
          if (mostrarCompletadas) {
            return (
              <Tarea
                key={tarea.id}
                tarea={tarea}
                toggleCompletada={toggleCompletada}
                editarTarea={editarTarea}
                borrarTarea={borrarTarea}
              />
            );
          } else if (!tarea.completada) {
            return (
              <Tarea
                key={tarea.id}
                tarea={tarea}
                toggleCompletada={toggleCompletada}
                editarTarea={editarTarea}
                borrarTarea={borrarTarea}
              />
            );
          }
          return "";
        })
      ) : (
        //si la lista esta vacia imprimiendo un mensaje en pantalla de que esta vacia
        <div className="lista-tareas__mensaje">No hay tareas agregadas</div>
      )}
    </ul>
  );
};
//exportando componente ListaTareas
export default ListaTareas;
