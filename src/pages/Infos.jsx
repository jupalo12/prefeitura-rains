import React from "react";
import "./index.css";
import Logo from "../data/Logo.png";
import Casa from "../data/image 6.png";
import Visto from "../data/image 7.png";
import Serviços from "../data/dados"
const Infos = () => {
  

  return (
    <div>
      <div className="footer">
        <svg
          onClick={() => {
            window.location = "/agendar";
          }}
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.95825 14.3197L22.4583 14.3197"
            stroke="#040404"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.0164 21.3482L4.95802 14.3202L12.0164 7.29102"
            stroke="#040404"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div>Agendar Serviços</div>
      </div>
      <div className="logoAgendar">
        <img src={Logo} alt="" />
      </div>
      <div className="openServices">
        <div className="quadroInfo">
          <img src={Casa} alt="" />
        </div>
        <div className="infoAgenda foco">
          <div className="mostSearched">
            <img src={Visto} alt="" />
            Mais Procurados
          </div>
          <p>Casa e Moradia</p>
          <p>Alvarás, edificações, IPTU.</p>
        </div>
        <div className="serviçosDisponiveis">
          <span>Serviços Disponíveis</span>
          {Serviços.map((service, index) => 
            <div key={service + index}> <li>{service.name}</li> </div>
          )}
        </div>
        <div className="diaHora"></div>
        <button
          onClick={() => {
            window.location = "/informação-serviço";
          }}
          className="agendarButton infoBtn"
          type="button"
        >
          Realizar Agendamento
        </button>
      </div>
    </div>
  );
};

export default Infos;
