import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./Compoents/Navbar";
import Auth from "./Compoents/auth";
import main from "./Compoents/Group_order";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <hr />
        {/* <Switch /> */}
        <Route exact path="/" component={main} />
        <Route path="/Auth" component={Auth} />
      </div>
    </BrowserRouter>
  );
}

export default App;
