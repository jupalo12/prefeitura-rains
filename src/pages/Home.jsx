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
import Elevador from "../data/elevador.png";
import Farol from "../data/farol.png";
import { Link } from "react-router-dom";

const Home = () => {
  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2300);
  }, []);

  // Custom css para o loader
  const override = `
display: block;
margin: 0 auto;
border-color: red;
`;

  return isLoading ? (
    <Splash />
  ) : (
    <div className="home">
      <div className="divAnuncio">Acesse o site em um dispositivo Mobile</div>
      <Menu />
      <div>
        <img className="cover" src={Fundo} alt="fundo-home" />
      </div>
      <div className="cloud">
        <div className="cloud-span">
          {" "}
          <span>Fique por dentro de tudo que acontece por aqui</span>
        </div>
      </div>
      <input
        type="search"
        className="busca-home"
        placeholder="Busque por Eventos e Serviços"
        id="busca-eventos"
      />
      <div className="services slideInUp slidein">
        <div className="navigate">
          <span>Navegue pelos nossos serviços </span>
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
          <div className="links">
            <img src={Agenda} alt="" />
            <Link to="/agendar">Agendar Serviços</Link>
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
        <div className="ondeIr">
          <div className="inline">
            <span>Onde Ir?</span>
            <span>Ver todos</span>
          </div>

          <div className="locals">
            <div>
              <img src={Elevador} alt="" />
              <p className="localName"> Elevador Lacerda</p>
              <p>Nota</p>
              <p>Atração Turistica Praça Tomé de Souza, S/N</p>
              <p>Antigo elevador famoso com vista</p>
              <div className="close">
                <span style={{ color: "red" }}>Fechado</span>
                <span> • Abre às 6:00</span>
              </div>
            </div>
            <div>
              <img src={Farol} alt="" />
              <p className="localName"> Elevador Lacerda</p>
              <p>Nota</p>
              <p>Atração Turistica Praça Tomé de Souza, S/N</p>
              <p>Antigo elevador famoso com vista</p>
              <div className="close">
                <span style={{ color: "red" }}>Fechado</span>
                <span> • Abre às 6:00</span>
              </div>
            </div>
            <div>
              <img src={Elevador} alt="" />
              <p className="localName"> Elevador Lacerda</p>
              <p>Nota</p>
              <p>Atração Turistica Praça Tomé de Souza, S/N</p>
              <p>Antigo elevador famoso com vista</p>
              <div className="close">
                <span style={{ color: "red" }}>Fechado</span>
                <span> • Abre às 6:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
