import Pages from "./pages/Pages";
import styledComponents from "styled-components";
import Category from "./components/Category";
import { NavLink } from "react-router-dom";
import Search from "./components/Search";
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to={'/'}>
          <Header>Recipe Mania</Header>
        </NavLink>
        <Search></Search>
        <Category/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}
const Header = styledComponents.div`
  font-weight:1200;
  font-size:3rem;
  text-align:center;
  margin:1rem;
`;


export default App;
