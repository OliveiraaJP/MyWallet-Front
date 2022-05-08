import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

import GlobalStyle from "./style/GlobalStyle";

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
        </Routes>
        <GlobalStyle />
        </BrowserRouter>
    )
}

export default App;