import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Main from "./pages/Main";

import GlobalStyle from "./style/GlobalStyle";
import { useContext } from "react";

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/main" element={<Main/>}/>
        </Routes>
        <GlobalStyle />
        </BrowserRouter>
    )
}

export default App;