import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Logo from "../../components/Logo";
import { $container, $input, $button } from "./styles";




function Signup() {
  
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function createUser(event) {
    event.preventDefault();
    console.log(name, email, password, confirmPassword);
    try {
      const promise = axios.post(`http://localhost:5000/signup`, {
        name, email, password, confirmPassword
      })
      console.log("cadastrou com sucesso");
      navigate("/")
    } catch (error) {
      console.log("erro front criar user", error);
    }
  }

  

  return (
    <$container>
      <Logo />
      <form onSubmit={createUser}>
      <$input
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          required
        />
        
        <$input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <$input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <$input
          type="password"
          placeholder="Confirme a senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <$button type="submit">
          <p>Cadastrar</p>
        </$button>
      </form>
      <Link to="/" style={{ textDecoration: 'none', marginTop:'36px'}}>
        <span>já tem uma conta? Entre agora!</span>
      </Link>
    </$container>
  );
}

export default Signup;