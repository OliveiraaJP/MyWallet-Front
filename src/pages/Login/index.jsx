import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../components/Logo";
import UserContext from "../../contexts/userContext";
import { $container, $input, $button } from "./styles";

function Login() {

  const navigate = useNavigate()
  const {userToken ,setUserToken} = useContext(UserContext) 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(event) {
    event.preventDefault();
    console.log(email, password);
    let body = {email, password}

    try {
      const promise = await axios.post("http://localhost:5000/signin", body)
      console.log("LOGOU");
      console.log(promise);
      const {token, name} = promise.data;
      setUserToken({name, token})
      navigate("/main")
    } catch (error) {
      console.log("erro front login", error);
    } 
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
      <Link to="/signup" style={{ textDecoration: 'none', marginTop:'36px' }}>
        <span>Primeira vez? Cadastre-se</span>
      </Link>
    </$container>
  );
}

export default Login;
