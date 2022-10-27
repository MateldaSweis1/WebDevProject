import Parse from "parse";

// CREATE operation - new plant with Name
export const createUserPlant = (nickname, name) => {
  console.log("Creating: ", nickname);
  const Plant = Parse.Object.extend("UserPlants");
  const plant = new Plant();
  // using setter to UPDATE the object
  plant.set("nickname", nickname);
  plant.set("plant_id", name);
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
