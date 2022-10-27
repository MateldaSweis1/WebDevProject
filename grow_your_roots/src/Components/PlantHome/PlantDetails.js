import React, { useEffect, useState } from "react";
import {
  getAllPlants,
  createPlant,
  removePlant
} from "../../Services/CRUDServices";
import PlantBox from "./PlantBox";

//Plant info component, child componenet of Parent.js
// Includes the plant information passed down from parent as prop
// Also includes the button with the onClick callback function
const PlantDetails = () => {

    const [plants, setPlants] = useState([]);
    const [plant_id, setPlant_id] = useState();
    const [numPlants, setNumPlants] = useState(1);

    useEffect(() => {
      // Asynchronously loading in the data
      getAllPlants().then((response) => {
        // updating plants variable with response from service
        setPlants(response);
        console.log(plants)
      });
    }, []);

    // Events up callback function
    function expandInfo() {
      // Incrementing the number of plants the user has
      // Triggered by callback function passed to PlantBasic Component
      setNumPlants(numPlants + 1);
      alert("You have " + numPlants + " plant(s)!");
    };



  // Flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
  const [remove, setRemove] = useState("");

  // UseEffect that runs when changes
    // are made to the state variables/flags
    useEffect(() => {
      // Check for add flag and make sure plant_id state variable is defined
      if (plant_id && add) {
        createPlant(plant_id).then((newPlant) => {
          setAdd(false);
          setPlants([...plants, newPlant]);
        });
      }

      // Check if remove state variable is holding an ID
      if (remove.length > 0) {
        //Filter the old lessons list to take out selected lesson
        const newPlants = plants.filter((plant) => plant.plant_id !== remove);
        setPlants(newPlants);
        removePlant(remove).then(() => {
          console.log("Removed plant with ID: ", remove);
        });
        // Reset remove state variable
        setRemove("");
      }
    }, [plant_id, plants, add, remove]);
/*
    // Handler to handle event passed from child submit button
  const onClickHandler = (e) => {
    e.preventDefault();
    setAdd(true);
  };

  // Handler to track changes to the child input text
  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setPlant_id(e.target.value);
  };
*/

  return (
    <div>
      <h1>These are the available plants:</h1>
      <div>
      {plants.length > 0 && (
        plants.map(
          (plant) => (<PlantBox plant={plant}/>)
        ))}
      </div>
    </div>
  );
};

export default PlantDetails;
