import { $container, $main, $buttonsBox } from "./styles";
import Header from "../../components/Header";
import plusSVG from "../../assets/plus.svg"
import minusSVG from "../../assets/minus.svg"

import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/userContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Main() {
  
  const navigate = useNavigate()
  const [transactions, setTransactions] = useState([])
  const {userToken} = useContext(UserContext)
  console.log(userToken);
  const config = {
    headers : {
      "Authorization": `Bearer ${userToken.token}`
    }
  }

  useEffect(() => {
    console.log("USEI EFFECT");
    async function showTransactions() {
      try {
        const promise = await axios.get("http://localhost:5000/transactions", config)
        console.log(promise);
        setTransactions(promise.data)
        console.log("transação ->", transactions);
      } catch (error) {
        console.log("erro use effect get transaction", error);
      }
    }
    
    showTransactions()
  }, [])

  function newEntry(){
    navigate("/entry")
  }

  function newExit(){
    navigate("/exit")
  }

  return (
    <$container>
      <Header name = {userToken.name}/>
      <$main>
      {transactions.length === 0 && (
        <p>Não tem nada</p>
      )}
     {transactions.length !== 0 && (
        <p>Não tem anda</p>
      )}
      
      </$main>
      <$buttonsBox>
        <div>
            <img src={plusSVG} alt="plus button" onClick={newEntry}/>
          <p>Nova entrada</p>
        </div>
        <div>
            <img src={minusSVG} alt="minus button" onClick={newExit}/>
          <p>Nova saída</p>
        </div>
      </$buttonsBox>
    </$container>
  );
}

export default Main;
