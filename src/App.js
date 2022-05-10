import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Entry from "./pages/Entry";
import Exit from "./pages/Exit/indes";

import GlobalStyle from "./style/GlobalStyle";
import UserContext from "./contexts/userContext";
import { useState } from "react";


function App() {
const [userToken, setUserToken] = useState(null)

  return (
    <BrowserRouter>
      <UserContext.Provider value={{userToken, setUserToken}}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
          <Route path="/entry" element={<Entry />} />
          <Route path="/exit" element={<Exit />} />
        </Routes>
        <GlobalStyle />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
