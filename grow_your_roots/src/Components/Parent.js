import React from "react";
import PlantBasic from "./PlantBasic.js";
import { getAllPlants } from "../Services/Plants.js";

const Parent = () => {
  const [plants, setPlants] = useState([]);
  const [numPlants, setNumPlants] = useState(1);

  // Events up callback function
  function expandInfo() {
    // Incrementing the number of plants the user has
    // Triggered by callback function passed to PlantBasic Component
    setNumPlants(numPlants + 1);
    alert("You have " + numPlants + " plant(s)!");
  }

  useEffect(() => {
    // Asynchronously loading in the data from the data.json file
    getAllPlants().then((response) => {
      // updating plants variable with response from service
      setPlants(response);
    });
  }, []);

  // Returning title, navigation, and PlantBasic (child) Component

  return (
    <div>
    <h1>Grow Your Roots</h1>
    <button><a href="../userPlants/user.html">Add Your Plants</a></button>
    </div>
  );
};

export default Parent;
