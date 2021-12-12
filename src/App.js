import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import "./components/BottomNavigation.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router";
import { Container } from "@mui/material";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Shows from "./Pages/Shows/Shows";
import Search from "./Pages/Search/Search";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/shows" component={Shows}></Route>
            <Route path="/search" component={Search}></Route>
          </Switch>
        </Container>
      </div>

      <SimpleBottomNavigation className="bottomNavigation" />
    </BrowserRouter>
  );
}

export default App;
