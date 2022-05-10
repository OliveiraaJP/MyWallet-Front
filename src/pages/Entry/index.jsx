import {$container, $header, $input, $button } from "./styles"

function Entry(){
    return(
        <$container>
        <$header><p>Nova entrada</p></$header>
        <form>
            <$input placeholder="Valor"></$input>
            <$input placeholder="Descrição"></$input>
            <$button><p> Salvar entrada </p></$button>
        </form>
        </$container>
    )
}

export default Entry;