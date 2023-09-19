import React from "react";
import "./index.css";
import Logo from "../data/Logo.png";
import Casa from "../data/image 6.png";
import Visto from "../data/image 7.png";
const Agendar = () => {
  return (
    <div>
      <div className="footer">
        <svg
          onClick={() => {
            window.location = "/";
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
      <div className="agendarServicos">
        <div className="realizarAgendamento">
          <div className="quadro">
            <img src={Casa} alt="" />
          </div>
          <div className="infoAgenda">
            <div className="mostSearched">
              <img src={Visto} alt="" />
              Mais Procurados
            </div>
            <p>Casa e Moradia</p>
            <p>Alvarás, edificações, IPTU.</p>
          </div>
          <button
            onClick={() => {
              window.location = "/informacao";
            }}
            className="agendarButton"
            type="button"
          >
            Realizar Agendamento
          </button>
        </div>
        <div className="realizarAgendamento2">
          <div className="quadro">
            <img src={Casa} alt="" />
          </div>
          <div className="infoAgenda">
            <div className="mostSearched">
              <img src={Visto} alt="" />
              Mais Procurados
            </div>
            <p>Casa e Moradia</p>
            <p>Alvarás, edificações, IPTU.</p>
          </div>
          <button
            onClick={() => {
              window.location = "/informacao";
            }}
            className="agendarButton btn2"
            type="button"
          >
            Realizar Agendamento
          </button>
        </div>

        <div className="realizarAgendamento3">
          <div className="quadro">
            <img src={Casa} alt="" />
          </div>
          <div className="infoAgenda">
            <div className="mostSearched">
              <img src={Visto} alt="" />
              Mais Procurados
            </div>
            <p>Casa e Moradia</p>
            <p>Alvarás, edificações, IPTU.</p>
          </div>
          <button
            onClick={() => {
              window.location = "/informacao";
            }}
            className="agendarButton btn3"
            type="button"
          >
            Realizar Agendamento
          </button>
        </div>
        <div className="realizarAgendamento4">
          <div className="quadro">
            <img src={Casa} alt="" />
          </div>
          <div className="infoAgenda">
            <div className="mostSearched">
              <img src={Visto} alt="" />
              Mais Procurados
            </div>
            <p>Casa e Moradia</p>
            <p>Alvarás, edificações, IPTU.</p>
          </div>
          <button
            onClick={() => {
              window.location = "/informacao";
            }}
            className="agendarButton btn4"
            type="button"
          >
            Realizar Agendamento
          </button>
        </div>
      </div>
    </div>
  );
};

export default Agendar;
