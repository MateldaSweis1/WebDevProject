import React from "react";

const PlantBox = (plant) => {

    return (
        <div class="each" key={plant.plant.get("plant_id")}>
            <h3>{plant.plant.get("plant_id")}</h3>
            <img src = {plant.plant.get("image")._url} width="250" height="200" />
            <button onClick="${onPlantClick}" class="collapsible">
              Quick Add
            </button>
            <ul class="plantDetails">
              <li>{plant.plant.get("light")}</li>
              <li>{plant.plant.get("water")}</li>
              <li>{plant.plant.get("fertilizer")}</li>
              <li>{plant.plant.get("place")}</li>
              <li>{plant.plant.get("category")}</li>
              <li>{plant.plant.get("size")}</li>
            </ul>
            </div>
    )
}

export default PlantBox;