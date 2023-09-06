import React, { useState, useEffect } from "react";
import "./index.css";
import Menu from "../components/Menu";
import Fundo from "../data/home-fundo.png";
import Agenda from "../data/agenda.png";
import Guide from "../data/location.png";
import Events from "../data/date.png";
import Phones from "../data/phone.png";
import Comercial from "../data/casa.png";
import Others from "../data/more.png";
import Splash from "./Splash";
import PacmanLoader from "react-spinners/PacmanLoader";
import ClockLoader from "react-spinners/ClockLoader";

const Home = () => {
  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Custom css for loader
  const override = `
display: block;
margin: 0 auto;
border-color: red;
`;

  return isLoading ? (
    <Splash />
  ) : (
    <div className="home">
      <Menu />
      <div>
        <img className="cover" src={Fundo} alt="fundo-home" />
      </div>
      <div className="cloud">
        <div className="cloud-span">
          {" "}
          <span>
            Fique por dentro de tudo <br /> que acontece por aqui
          </span>
        </div>
      </div>
      <input
        type="search"
        className="busca-home"
        placeholder="Busque por eventos e Destinos"
        id="busca-eventos"
      />
      <div className="services slideInUp slidein">
        <div className="navigate">
          <span>Navegue Pelos Nossos Seriços </span>
          <div
            onClick={() => {
              window.location = "/";
            }}
            className="links"
          >
            <img src={Comercial} alt="" /> Guia Comercial
          </div>
          <div
            onClick={() => {
              window.location = "/";
            }}
            className="links"
          >
            <img src={Guide} alt="" />
            Guia Turístico
          </div>
          <div
            onClick={() => {
              window.location = "/agendar";
            }}
            className="links"
          >
            <img src={Agenda} alt="" />
            Agendar Serviços
          </div>
          <div
            onClick={() => {
              window.location = "/";
            }}
            className="links"
          >
            <img src={Events} alt="" />
            Eventos
          </div>
          <div
            onClick={() => {
              window.location = "/";
            }}
            className="links"
          >
            <img src={Phones} alt="" />
            Telefones Uteis
          </div>
          <div
            onClick={() => {
              window.location = "/";
            }}
            className="links"
          >
            <img src={Others} alt="" />
            Outros
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
