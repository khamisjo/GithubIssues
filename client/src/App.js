import React from "react";
import IssuePage from "./containers/IssuePage";
import { BrowserRouter, Route } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import HomePage from "./containers/HomePage";
const App = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">GitHub Issues</Navbar.Brand>
      </Navbar>
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={HomePage} />
            <Route path="/details" component={IssuePage} />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
