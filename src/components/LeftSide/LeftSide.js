import React from "react";
import Form from "../Form/Form";
import './LeftSide.css'
import Google from '../../assets/Google.svg';
import Facebook from '../../assets/Facebook.svg';

const LeftSide = () => {
  return (
    <div className="h-100 mt-4 d-flex flex-column justify-content-center align-items-center">
      <div className="w-75">
        <h1 className="title">Bem-vindo de volta!</h1>
        <span className="text">
          Estamos felizes que esteja de volta para retomar seus projetos no
          Projetolist
        </span>
      </div>
      <Form />
      <div className="mt-2 w-100 d-flex flex-column justify-content-center align-items-center">
        <p className="text">OU ENTRE COM</p>
        <div className="img_container">
            <img src={Facebook} alt="Facebook" />
            <img src={Google} alt="Google" className="m-2"/>
        </div>
        <div className="d-flex mt-4">
            <p className="text">A inda nao tem uma conta?</p>
            <p className="text-bold">Cadastre-se</p>
        </div>

      </div>
    </div>
  );
};

export default LeftSide;
