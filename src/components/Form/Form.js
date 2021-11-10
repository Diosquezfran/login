import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import Swal from "sweetalert2";

const Form = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  let disabled = !(user.username.length && user.password.length);

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
        const data = await axios.post('https://api-flordeemprendedora.start-7.com/api/auth/login/', user)
        if(data.data.token){
            localStorage.setItem("Token", data.data.token);
        }
        Swal.fire(`Welcome ${data.data.first_name}`, "", "success");
        setUser({
          username:'',
          password: ''
        })
    } catch (error) {
      Swal.fire("Email ou senha incorretos", "", "error");;
    }
  };

  return (
    <form className="form-group w-75" onSubmit={handleSumbit}>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
        placeholder="Email"
        className="form-control mt-4"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleInputChange}
        placeholder="Senha"
        className="form-control mt-2 mb-2"
      />
      <div className="link_container">
        <a href="https://www.google.com" className="form_link">
          Esqueceu sua senha?
        </a>
      </div>
      <button className="btn w-100 mt-4 custom" disabled={disabled}>Entrar</button>
    </form>
  );
};

export default Form;
