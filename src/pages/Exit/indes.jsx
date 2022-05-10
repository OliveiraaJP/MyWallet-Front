import {$container, $header, $input, $button } from "./styles"

function Exit(){
    return(
        <$container>
        <$header><p>Nova saída</p></$header>
        <form>
            <$input placeholder="Valor"></$input>
            <$input placeholder="Descrição"></$input>
            <$button><p> Salvar saída </p></$button>
        </form>
        </$container>
    )
}

export default Exit;