import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//Crear ContextAPI
export const CategoriasContext = createContext();

//CrearProvider
const CategoriasProvider = (props) => {
  //Definir State
  const [categorias, guardarCategorias] = useState([]);

  //Ejecutar llamada a la API
  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const categorias = await axios.get(url);
      guardarCategorias(categorias.data.drinks);
    };
    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
