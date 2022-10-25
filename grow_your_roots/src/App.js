import React from "react";
import Components from "./Components/Components";
import * as Env from "./Environments";
import Parse from "parse";
import './App.css';

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  return <Components />;
}

export default App;
