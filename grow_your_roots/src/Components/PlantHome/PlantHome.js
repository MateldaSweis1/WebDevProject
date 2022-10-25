import React, { useEffect, useState } from "react";
import PlantDetails from "./PlantDetails";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {

  const [plants, setPlants] = useState([]);

  useEffect(()=> {

  }, [])

  return (
    <section>
      <h1>Grow Your Roots</h1>
      <div>
          <Link to="/users">
            <button>Add Your Plants</button>
          </Link>
        </div>
      <PlantDetails plants={plants}/>
    </section>
    );
  }

export default Home;
  