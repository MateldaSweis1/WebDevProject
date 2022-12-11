import Parse from "parse";

//import {getById} from "./CRUDServices.js";



// CREATE operation - new plant with Name
export const createUserPlant = async (newUserPlant) => {
  console.log("NewUserPlant being created: ", newUserPlant);
  console.log("Creating: ", newUserPlant.nickname);
  const Plant = Parse.Object.extend("UserPlants");
  const plant = new Plant();

  // using setter to UPDATE the object

  // Code for getting info related to type of plant owned by user automatically
  //and storing it in database

  let parseQueryPlantType = new Parse.Query('Plant');
  parseQueryPlantType.contains('plant_id', newUserPlant.plant_id);
  const plantTypeInfo = await parseQueryPlantType.find();

  plant.set("nickname", newUserPlant.nickname);
  plant.set("light", plantTypeInfo[0]['attributes']['light']);
  plant.set("water", plantTypeInfo[0]['attributes']['water']);
  plant.set("fertilizer", plantTypeInfo[0]['attributes']['fertilizer']);
  plant.set("place", plantTypeInfo[0]['attributes']['place']);
  plant.set("category", plantTypeInfo[0]['attributes']['category']);
  plant.set("size", plantTypeInfo[0]['attributes']['size']);
  const plantId = newUserPlant.plant_id;
  plant.set("plant_id", { "__type": "Pointer", "className": "Plant", "objectId": plantId });
  const locStore = JSON.parse(localStorage.getItem("Parse/FnFsABZT3nmw3g8Tx8Jwl0zeDLS3Yso1tTJ6P78R/currentUser"));
  const userId = locStore.objectId;
  plant.set("plant_owner", { "__type": "Pointer", "className": "_User", "objectId": userId });

  //Set image
  try{
  let myFile = newUserPlant.image.toString('base64');
  const  parseFile = new Parse.File("imageFile.jpeg", {base64: myFile});
	plant.set("image", parseFile);
  }
  catch {
    console.log("Error uploading image");
  }
  //Write results for plant object into database
  return plant.save().then((result) => {
    // returns new plant object
    return result;
  });
};

// READ operation - get plant by ID
export const getUserPlantById = (id) => {
  const UserPlants = Parse.Object.extend("UserPlants");
  const query = new Parse.Query(UserPlants);
  return query.get(('plant_id').get('id')).then((result) => {
    // return Plant object with objectId: id
  return result;
  });
};

// READ operation - get all plants in Parse class UserPlants
export const getAllUserPlants = () => {

  //function to check if ownedPlant is owned by current user
  function checkUser(input) {
    //get ID of current user logged in
    const locStore = JSON.parse(localStorage.getItem("Parse/FnFsABZT3nmw3g8Tx8Jwl0zeDLS3Yso1tTJ6P78R/currentUser"));
    const userId = locStore.objectId;

    return userId == input['attributes']['plant_owner']['id'];
  }

  const UserPlants = Parse.Object.extend("UserPlants");
  const query = new Parse.Query(UserPlants);
  return query.find().then((results) => {
    // returns array of UserPlant objects that belong to current logged in user
    const filteredResults = results.filter(checkUser);
    return filteredResults;
  });
};
/* Might later want to implement an update operation
// UPDATE operation - update plant by ID
export const updateUserPlant = (idOld, idNew) => {
  const UserPlants = Parse.Object.extend("UserPlants");
  const query = new Parse.Query(UserPlants);
  return query.get(idOld).then((plant) => {
    plant.update(idNew);
  });
};
*/
// DELETE operation - remove plant by ID
export const removeUserPlant = (id) => {
  const UserPlants = Parse.Object.extend("UserPlants");
  const query = new Parse.Query(UserPlants);
  return query.get(id).then((plant) => {
    plant.destroy();
  });
};
