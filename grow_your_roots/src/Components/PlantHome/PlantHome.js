import React, { useEffect, useState } from "react";
import PlantDetails from "./PlantDetails";
import { Link } from "react-router-dom";
import "../Styling/PlantMain.css";

const Home = () => {

  const [plants, setPlants] = useState([]);

  useEffect(()=> {

  }, [])

  return (
    <section>
      <h1>Grow Your Roots</h1>
      <div>
          <Link to="/users">
            <button>View Your Plants</button>
          </Link>
        </div>
      <PlantDetails />
    </section>
    );
  }

export default Home;
