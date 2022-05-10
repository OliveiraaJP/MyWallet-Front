import { $container, $main, $buttonsBox } from "./styles";
import Header from "../../components/Header";
import plusSVG from "../../assets/plus.svg"
import minusSVG from "../../assets/minus.svg"

function Main() {


  return (
    <$container>
      <Header />
      <$main></$main>
      <$buttonsBox>
        <div>
            <img src={plusSVG} alt="plus button"/>
          <p>Nova entrada</p>
        </div>
        <div>
            <img src={minusSVG} alt="minus button"/>
          <p>Nova saída</p>
        </div>
      </$buttonsBox>
    </$container>
  );
}

export default Main;
