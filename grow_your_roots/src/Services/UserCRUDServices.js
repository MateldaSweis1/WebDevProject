import Parse from "parse";




// CREATE operation - new plant with Name
export const createUserPlant = (newUserPlant) => {
  console.log("NewUserPlant being created: ", newUserPlant);
  console.log("Creating: ", newUserPlant.nickname);
  const Plant = Parse.Object.extend("UserPlants");
  const plant = new Plant();

  // using setter to UPDATE the object
  plant.set("nickname", newUserPlant.nickname);
  plant.set("light", newUserPlant.light);
  plant.set("water", newUserPlant.water);
  plant.set("fertilizer", newUserPlant.fertiizer);
  plant.set("place", newUserPlant.place);
  plant.set("category", newUserPlant.category);
  plant.set("size", newUserPlant.size);
  const plantId = newUserPlant.plant_id;
  plant.set("plant_id", { "__type": "Pointer", "className": "Plant", "objectId": plantId });
  const locStore = JSON.parse(localStorage.getItem("Parse/FnFsABZT3nmw3g8Tx8Jwl0zeDLS3Yso1tTJ6P78R/currentUser"));
  const userId = locStore.objectId;
  plant.set("plant_owner", { "__type": "Pointer", "className": "_User", "objectId": userId });


  //plant.set("image"._url, image);

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
  const UserPlants = Parse.Object.extend("UserPlants");
  const query = new Parse.Query(UserPlants);
  return query.find().then((results) => {
    // returns array of UserPlant objects
    return results;
  });
};
// UPDATE operation - update plant by ID
export const updateUserPlant = (idOld, idNew) => {
  const UserPlants = Parse.Object.extend("UserPlants");
  const query = new Parse.Query(UserPlants);
  return query.get(idOld).then((plant) => {
    plant.update(idNew);
  });
};
// DELETE operation - remove plant by ID
export const removeUserPlant = (id) => {
  const UserPlants = Parse.Object.extend("UserPlants");
  const query = new Parse.Query(UserPlants);
  return query.get(id).then((plant) => {
    plant.destroy();
  });
};

export const setEdit = (id) => {
  const UserPlants = Parse.Object.extend("UserPlants");
  const query = new Parse.Query(UserPlants);
  return query.get(id).then((plant) => {
    plant.set("edit", true);
    plant.save();
    return plant.get("edit");
  }).catch((error) => {
    alert("Error: ", error);
    return false;
  });
}

export const undoEdit = (id) => {
  const UserPlants = Parse.Object.extend("UserPlants");
  const query = new Parse.Query(UserPlants);
  return query.get(id).then((plant) => {
    plant.set("edit", false);
    plant.save();
    return true;
  }).catch((error) => {
    alert("Error: ", error);
    return false;
  });
}
