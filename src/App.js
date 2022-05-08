import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup"

import GlobalStyle from "./style/GlobalStyle";

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
        </Routes>
        <GlobalStyle />
        </BrowserRouter>
    )
}

export default App;