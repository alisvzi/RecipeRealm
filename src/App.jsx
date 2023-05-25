import { ImSpoonKnife } from "react-icons/im";
import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
import { Logo, Nav } from "./components/StyledComponents";
import Pages from "./pages/Pages";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav>
          <ImSpoonKnife />
          <Logo to={"/"}>RecipeRealm</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </>
  );
};

export default App;
