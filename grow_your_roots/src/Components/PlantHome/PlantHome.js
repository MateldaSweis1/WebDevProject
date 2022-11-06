import React, { useEffect, useState } from "react";
import PlantDetails from "./PlantDetails";
import { Link } from "react-router-dom";
import "../Styling/PlantMain.css";
import Header from "../Header/Header";

// Home component
// Includes header of the homepage, navigation link to the user page, and the PlantDetails component
const Home = () => {

  return (
    <section>
      <h1>Grow Your Roots</h1>
      <div>
          <Link to="/users">
            <button>View Your Plants</button>
          </Link>
        </div>
      <PlantDetails />
      <Header />
    </section>
    );
  }

export default Home;
