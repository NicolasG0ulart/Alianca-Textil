import { createGlobalStyle } from "styled-components";
import Home from "./Pages/Home/Index"
import Sobre from "./Pages/About/About"
import Catalog from "./Pages/Catalog/Catalog"
import Contact from "./Pages/Contact/Contact"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body{
  font-family: "Paytone One", sans-serif;
}

}
`


function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        

        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/catalogo" element={<Catalog/>} />
        <Route path="/contato" element={<Contact/>} />
        </Routes>

      </Router>

      
    </>
  );
}

export default App;
