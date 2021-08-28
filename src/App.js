//importando librerias y componentes
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./componentes/header";
import FormularioTareas from "./componentes/formulario";
import ListaTareas from "./componentes/ListaTareas";

const App = () => {
  //obtener las tareas guardadas de localStorage
  const tareasGuardadas = localStorage.getItem("tareas")
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];
  // Establecemos el estado de las tareas
  const [tareas, cambiarTareas] = useState(tareasGuardadas);
  //Guardando el estado dentro de localStorage
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);
  //acceder a localStorage para comprobar que mostrarCompletadas es null
  let configMostrarCompletadas = "";
  //comprobando si el usuario marco que queria ver las tareas completadas o las no completadas.
  if (localStorage.getItem("mostrarCompletadas") === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas =
      localStorage.getItem("mostrarCompletadas") === "true";
  }
  //estableciendo la configuracion que eligio el usuario para mostrar las tareas
  const [mostrarCompletadas, CambiarMostarCompletadas] = useState(
    configMostrarCompletadas
  );
  //efecto para insertar en el localStorage la configuracion que dejo el usuario de mostar las tareas
  useEffect(() => {
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    <div className="contenedor">
      {/*Componente de header de la aplicacion */}
      <Header
        mostrarCompletadas={mostrarCompletadas}
        CambiarMostarCompletadas={CambiarMostarCompletadas}
      />
      {/*Componente de Formulario de la aplicacion */}
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      {/*Componente de Lista de tareas */}
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
};
//exportando el componente APP
export default App;
