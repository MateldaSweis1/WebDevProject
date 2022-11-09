import React, { useEffect, useState } from "react";
import PlantDetails from "./PlantDetails";
import { Link } from "react-router-dom";
import "../Styling/PlantMain.css";
import Header from "../Header/Header";
import Parse from "parse";
import HomeUserFooter from "./HomeUserFooter";

// Home component
// Includes header of the homepage, navigation link to the user page, and the PlantDetails component
const Home = () => {
  const goToUser = () => {
    Parse.User.current().authenticated = true;
  }

  if(Parse.User.current().authenticated) {
    return   (<section>
      <h1>Grow Your Roots</h1>
      <div>
          <Link to="/users">
            <button onClick={goToUser}>View Your Plants</button>
          </Link>
        </div>
      <PlantDetails />
      <HomeUserFooter />
    </section>)
  } else {
  return (
    <section>
      <h1>Grow Your Roots</h1>
      <div>
          <Link to="/auth">
            <button>View Your Plants</button>
          </Link>
        </div>
      <PlantDetails />
      <Header />
    </section>
    )};
  }

export default Home;
