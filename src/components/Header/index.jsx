import exitImg from "../../assets/exitVector.svg"
import {$header} from "./styles"

function Header({ name }) {
  return (
    <$header>
      <span>
        <p>Olá, {name}</p>
        <img src={exitImg} alt="exit button"/>
      </span>
    </$header>
    
  );
}

export default Header;
