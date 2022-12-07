import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { getAllUserPlants, undoEdit } from "../../Services/UserCRUDServices";

const Profile = () => {

    const [plant, setPlant] = useState([]);

    useEffect(()=> {
        getAllUserPlants().then((response) => {
            setPlant(response.filter((res) => (res.attributes.edit === true)));
        })
    }, []);
    
    return (
        <section>
          <h1>Edit</h1>
          <div>
          {plant.length > 0 && (
        plant.map(
          (plant) => (
            <div className="each" key={plant.get("nickname")}>
            <h3>{plant.get("nickname")}</h3>
            <Link to="/users">
                <button onClick={()=> {
                    undoEdit(plant.id)
                    }}>Back</button>
            </Link>
            </div>
            )
        ))}
        </div>
        </section>
    );
}

export default Profile;