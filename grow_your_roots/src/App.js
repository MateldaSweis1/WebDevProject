import React from "react";
import Parent from "./Components/Parent";
import * as Env from "./Environments";
import Parse from "parse";
import './App.css';

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  return <Parent />;
}

export default App;
