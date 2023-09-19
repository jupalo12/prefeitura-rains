import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agendar from "./pages/Agendar";
import Infos from "./pages/Infos";
import Sucesso from "./pages/agendamentoSucesso";
import Splash from "./pages/Splash";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/*" element={<Home />} />
        <Route exact path="/agendar" element={<Agendar />} />
        <Route exact path="/informacao" element={<Infos />} />
        <Route exact path="/sucesso" element={<Sucesso />} />
        <Route exact path="/s" element={<Splash />} />
      </Routes>
    </Router>
  );
}

export default App;
