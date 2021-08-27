import React, { useState } from "react";
import "./App.css";
import Header from "./componentes/header";
import FormularioTareas from "./componentes/formulario";
import ListaTareas from "./componentes/ListaTareas";

const App = () => {
  const [tareas, cambiarTareas] = useState([
    {
      id: 1,
      texto: "lavar la ropa",
      completada: false,
    },
  ]);
  //console.log(tareas);
  return (
    <div className="contenedor">
      <Header />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas tareas={tareas} />
    </div>
  );
};

export default App;
