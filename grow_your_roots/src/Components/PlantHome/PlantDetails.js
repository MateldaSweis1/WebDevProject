import React from "react";

const PlantDetails = (plants) => {
    return(
        <div>
            <h1>These are the available plants:</h1>
            <div>
                {/* {plants}.map((plant) => {(
                <div class="each" key={plant} >
                    <h3>{plant.id}</h3>
                    <img src={plant.image} width="250" height="200" ></img>
                    <ul class="plantDetails">
                        <li>{plant.light}</li>
                        <li>{plant.water}</li>
                        <li>{plant.fertilizer}</li>
                        <li>{plant.place}</li>
                        <li>{plant.category}</li>
                        <li>{plant.size}</li>
                    </ul>
                </div>)}) */}
            </div>
        </div>
    )

}

export default PlantDetails;