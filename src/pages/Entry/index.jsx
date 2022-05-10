import { $container, $header, $input, $button } from "./styles";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/userContext";
import axios from "axios";

function Entry() {
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const { userToken } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${userToken.token}`,
    },
  };

  async function sendEntry(event) {
    event.preventDefault();
    const body = {
      description,
      type: "entry",
      value: parseFloat(value),
    };

    try {
        await axios.post("http://localhost:5000/transactions", body, config)
        console.log("postou entrada ->" + body);
        navigate ("/")
    } catch (error) {
        console.log("error entry", error);
    }
  }

  return (
    <$container>
      <$header>
        <p>Nova entrada</p>
      </$header>
      <form onSubmit={sendEntry}>
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
          <p> Salvar entrada </p>
        </$button>
      </form>
    </$container>
  );
}

export default Entry;
