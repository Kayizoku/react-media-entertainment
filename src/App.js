import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import "./components/BottomNavigation.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Container, Switch } from "@mui/material";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/shows" component={shows}></Route>
            <Route path="/search" component={Search}></Route>
          </Switch>
        </Container>
      </div>

      <SimpleBottomNavigation className="bottomNavigation" />
    </BrowserRouter>
  );
}

export default App;
