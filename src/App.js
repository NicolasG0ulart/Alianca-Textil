import { createGlobalStyle } from "styled-components";
import Home from "./Pages/Home/Index"
import Sobre from "./Pages/About/About"
import Catalog from "./Pages/Catalog/Catalog"
import Contact from "./Pages/Contact/Contact"
import Apply from "./Pages/Apply/Apply"
import Work from "./Pages/Work/Work"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Background from "./images/background-site.png"

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body{
  font-family: "Paytone One", sans-serif;
  background-image: url(${Background});
}

}
`


function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/catalogo" element={<Catalog/>} />
          <Route path="/contato" element={<Contact/>} />
          <Route path="/candidatar-se" element={<Apply/>}/>
          <Route path="/trabalhe-conosco" element={<Work/>} />
          <Route path="*" element="Página não encontrada" />

          
        </Routes>

      </Router>

      
    </>
  );
}

export default App;
