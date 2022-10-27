import React, { useEffect, useState } from "react";
import {
  getAllUserPlants,
  createUserPlant,
  removeUserPlant
} from "../../Services/UserCRUDServices";
import UserPlantForm from "./UserPlantForm";

//Plant info component, child componenet of Parent.js
// Includes the plant information passed down from parent as prop
// Also includes the button with the onClick callback function
const UserPlantDetails = () => {

    const [plants, setPlants] = useState([]);
    const [nickname, setNickname] = useState();
    const [numPlants, setNumPlants] = useState(1);

    useEffect(() => {
      // Asynchronously loading in the data
      getAllUserPlants().then((response) => {
        // updating plants variable with response from service
        setPlants(response);
      });
    }, []);


  // Flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
  const [remove, setRemove] = useState("");

  // UseEffect that runs when changes
    // are made to the state variables/flags
    useEffect(() => {
      // Check for add flag and make sure plant_id state variable is defined
      if (nickname && add) {
        createUserPlant(nickname).then((newPlant) => {
          setAdd(false);
          setPlants([...plants, newPlant]);
        });
      }

      // Check if remove state variable is holding an ID
      if (remove.length > 0) {
        //Filter the old plants list to take out selected plant
        const newPlants = plants.filter((plant) => plant.id !== remove);
        setPlants(newPlants);
        removeUserPlant(remove).then(() => {
          console.log("Removed plant with ID: ", remove);
        });
        // Reset remove state variable
        setRemove("");
      }
    }, [nickname, plants, add, remove]);

    // Handler to handle event passed from child submit button
  const onClickHandler = (e) => {
    e.preventDefault();
    setAdd(true);
  };

  // Handler to track changes to the child input text
  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setNickname(e.target.value);
  };


  return (
      <div>
      {plants.length > 0 && (
        plants.map(
          (plant) => (
            <div class="each" key={plant.get("nickname")}>
            <h3>{plant.get("nickname")}</h3>
      
            <button
                   onClick={(e) => {
                     setRemove(plant.id);
                   }}
                 >
                   Delete Plant
                 </button>
            </div>
            )
        ))}
      <UserPlantForm onClick={onClickHandler} onChange={onChangeHandler}/>
    </div>
  );
};

export default UserPlantDetails;

////<img src = {(plant.get("image"))._url} width="250" height="200" />
