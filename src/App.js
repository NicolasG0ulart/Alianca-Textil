import { createGlobalStyle } from "styled-components";
import Home from "./Pages/Home/Index"
import Background from "./images/background.jpg"

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body{
  background-image: url(${Background});
  font-family: "Paytone One", sans-serif;
}

}
`


function App() {
  return (
    <>
      <GlobalStyle/>
      <Home/>
    </>
  );
}

export default App;
