import {createGlobalStyle} from 'styled-components'
import {Navbar} from "./navbar/navbar";
import {Banner} from "./banner/banner";
import Menu from "./menu/menu";

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
  }
  h1,h2,h3,h4 {
    font-family: "Roboto Condensed", sans-serif;
    font-size: x-large;
  }
`
function App() {
  return (
  <>
    <GlobalStyle />
    <Navbar />
    <Banner />
    <Menu />
    <h1>test</h1>
  </>
  );
}

export default App;
