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
  

  async function sendExit(event) {
    event.preventDefault();
    const body = {
      description,
      type: "exit",
      value: parseFloat(value),
    };

    try {
        const headers = {
            headers : {"Authorization": `Bearer ${userToken.token}`} 
        };
        console.log("postou saída ->" + body);
        navigate("/main")
        await axios.post("http://localhost:5000/transactions", body, headers)
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
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></$input>
        <$input
          placeholder="Descrição"
          required
          value={description}
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
