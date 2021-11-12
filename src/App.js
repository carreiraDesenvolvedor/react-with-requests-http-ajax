import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import "./App.css";

import Usuarios from "./components/Usuarios/Usuarios";
import AdicionarUsuario from "./components/AdicionarUsuario/AdicionarUsuario";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Início</NavLink>
              </li>
              <li>
                <NavLink to="/users">Usuários</NavLink>
              </li>
              <li>
                <NavLink to="/add">Adicionar Usuário</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={Home()} />
            <Route path="/users" element={Usuarios()} />
            <Route path="/add" element={AdicionarUsuario()} />
            <Route path="*" element={PageNotFound()} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
