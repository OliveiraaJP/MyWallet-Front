import { $container, $header, $input, $button } from "./styles";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/userContext";
import axios from "axios";

function Exit() {
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const { userToken } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${userToken.token}`,
    },
  };

  async function sendExit(event) {
    event.preventDefault();
    const body = {
      description,
      type: "exit",
      value: parseFloat(value),
    };

    try {
        await axios.post("http://localhost:5000/transactions", body, config)
        console.log("postou saída ->" + body);
        navigate ("/")
    } catch (error) {
        console.log("error exit", error);
    }
  }

  return (
    <$container>
      <$header>
        <p>Nova saída</p>
      </$header>
      <form onSubmit={sendExit}>
        <$input
          placeholder="Valor"
          required
          onChange={(e) => setValue(e.target.value)}
        ></$input>
        <$input
          placeholder="Descrição"
          required
          onChange={(e) => setDescription(e.target.value)}
        ></$input>
        <$button type="submit">
          <p> Salvar saída </p>
        </$button>
      </form>
    </$container>
  );
}

export default Exit;
