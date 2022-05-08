import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../components/Logo";
import { $container, $input, $button } from "./styles";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(event) {
    event.preventDefault();
    console.log(email, password);
  }

  return (
    <$container>
      <Logo />
      <form onSubmit={login}>
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
        <$button type="submit">
          <p>Entrar</p>
        </$button>
      </form>
      <Link to="/signup">
        <span>Primeira vez? Cadastre-se</span>
      </Link>
    </$container>
  );
}

export default Login;
