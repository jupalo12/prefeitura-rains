
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agendar from "./pages/Agendar";
import Infos from "../src/pages/Infos"

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/agendar" element={<Agendar />}/>
        <Route path="/informação-serviço" element={<Infos />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
