import React, { useState } from 'react';
import Parse from "parse";


const Test = () => {
  // State variables
  const [plant, setPlant] = useState(null);

  async function addPlant() {
    try {
      // create a new Parse Object instance
      const Plant = new Parse.Object('Plant');
      // define the attributes you want for your Object
      Plant.set('plant_id', 'John');
      Plant.set('light', 'john@back4app.com');
      // save it on Back4App Data Store
      await Plant.save();
      alert('Person saved!');
    } catch (error) {
      console.log('Error saving new person: ', error);
    }
  }

  async function fetchPlant() {
    // create your Parse Query using the Person Class you've created
    const query = new Parse.Query('Plant');
    // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
    query.equalTo('plant_id', 'Pentas');
    // run the query
    const Plant = await query.first();
    // access the Parse Object attributes
    console.log('person plant_id: ', Plant.get('plant_id'));
    console.log('person email: ', Plant.get('light'));
    console.log('person id: ', Plant.id);
    setPlant(Plant);
  }

  return (
    <div>
      <button onClick={addPlant}>Add Person</button>
      <button onClick={fetchPlant}>Fetch Person</button>
      {plant !== null && (
        <div>
          <p>{`Name: ${plant.get('plant_id')}`}</p>
          <p>{`Email: ${plant.get('light')}`}</p>
        </div>
      )}
    </div>
  );
};

export default Test;
