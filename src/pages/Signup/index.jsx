import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../components/Logo";
import { $container, $input, $button } from "./styles";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function login(event) {
    event.preventDefault();
    console.log(name, email, password, confirmPassword);
  }

  return (
    <$container>
      <Logo />
      <form onSubmit={login}>
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
          <p>Entrar</p>
        </$button>
      </form>
      <Link to="/" style={{ textDecoration: 'none', marginTop:'36px'}}>
        <span>já tem uma conta? Entre agora!</span>
      </Link>
    </$container>
  );
}

export default Signup;