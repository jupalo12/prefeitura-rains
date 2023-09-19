import React from "react";
import "../pages/index.css";
import Visto from "../data/image 8.png";
import Casa from "../data/image 6.png";
import Agenda from "../data/agenda.png";
import Logo from "../data/Logo.png";

const agendamentoSucesso = () => {
  return (
    <div>
      <div className="footer agendamento">
        <div>Agendamento</div>
      </div>
      <div className="logoAgendar">
        <img src={Logo} alt="" />
      </div>
      <div className="sucess">
        <img src={Visto} className="bounce-in-fwd" alt="" />
        <span>
          Agendamento <br /> Realizado com Sucesso
        </span>
        <div className="moradia">
          <img src={Casa} alt="" />
          <p>Casa e Moradia</p>
        </div>
        <div className="dataSucess">
          <img src={Agenda} alt="" />
          <p>04 de Outubro de 2023</p>
        </div>
        <span className="horarioSucess">16:30</span>
        <button
          onClick={() => {
            window.location = "/";
          }}
          className="agendarButton btn2 BtnFinal"
          type="button"
        >
          Voltar para o Início
        </button>
      </div>
    </div>
  );
};

export default agendamentoSucesso;
