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
 

  async function sendEntry(event) {
    event.preventDefault();
    const body = {
      description,
      type: "entry",
      value: parseFloat(value),
    };
    const headers = {
        headers: {"Authorization": `Bearer ${userToken.token}`}
    };
    
    try {
      console.log("postou entrada ->" + body);
      navigate("/main")
      await axios.post("http://localhost:5000/transactions", body, headers)
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
          <p> Salvar entrada </p>
        </$button>
      </form>
    </$container>
  );
}

export default Entry;
