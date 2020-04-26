import React from "react";

//ContextProvider
import CategoriasProvider from "./Context/CategoriasContext";
import RecetasProvider from "./Context/RecetasContext";
import ModalProvider from "./Context/ModalContext";

//Components
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import ListaRecetas from "./Components/ListaRecetas";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListaRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
