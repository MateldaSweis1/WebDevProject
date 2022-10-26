import React, { useEffect, useState } from "react";
import PlantBasic from "./PlantBasic";




  // Returning title, navigation, and PlantBasic (child) Component
const Parent = () => {
  return (
    <div>
    <h1>Grow Your Roots</h1>
    <button><a href="../userPlants/user.html">Add Your Plants</a></button>
    <PlantBasic />
    </div>
  );
};

export default Parent;
