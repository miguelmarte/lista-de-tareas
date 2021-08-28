import React, { useState } from "react";
import "./App.css";
import Header from "./componentes/header";
import FormularioTareas from "./componentes/formulario";
import ListaTareas from "./componentes/ListaTareas";

const App = () => {
  const [tareas, cambiarTareas] = useState([
    {
      id: 1,
      texto: "Editar Video",
      completada: false,
    },
    {
      id: 2,
      texto: "Ver peliculas",
      completada: true,
    },
  ]);
  //console.log(tareas);
  return (
    <div className="contenedor">
      <Header />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas} />
    </div>
  );
};

export default App;
