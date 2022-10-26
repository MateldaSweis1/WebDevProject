import React from "react";
import Parent from "./Components/Parent";
import * as Env from "./Environments";
import Parse from "parse";
import './Components/Styling/PlantMain.css';
import Test from "./Components/Test";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  return (
    <div>
    <Parent />
    </div>
  );
}

export default App;
