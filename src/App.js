import React, { useState } from 'react';
import Home from "./views/Home";
import Details from "./views/Details";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [ theme, setTheme ] = useState(true);

  return (
    <Router>
      <NavBar theme={theme} setTheme={setTheme} />
      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/details" exact>
          <Details />
        </Route>

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
