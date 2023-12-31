import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Productos from "./components/Productos";
import NuevoProducto from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";
import "./App.css";

//Redux
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Provider store={store}>
        <Header />

        <div className="container mt-5">
          <Routes>
            <Route exact path="/" element={<Productos />} />
            <Route exact path="/productos/nuevo" element={<NuevoProducto />} />
            <Route
              exact
              path="/productos/editar/:id"
              element={<EditarProducto />}
            />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
