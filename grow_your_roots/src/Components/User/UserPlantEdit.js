import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { getAllUserPlants, undoEdit, updatePlant } from "../../Services/UserCRUDServices";

const Profile = () => {

    const [plant, setPlant] = useState([]);
    const [newPlant, setNewPlant] = useState({
        nickname: "",
        fertilizer: "",
        size: "",
        place: "",
        light: "",
        water: "",
        category: ""
    });
    const [add, setAdd] = useState(false);

    useEffect(()=> {
        getAllUserPlants().then((response) => {
            setPlant(response.filter((res) => (res.attributes.edit === true)));
        })
    }, []);

    useEffect(() => {
        if (newPlant && add) {
            if (newPlant.nickname === "") newPlant.nickname = plant[0].attributes.nickname;
            if (newPlant.fertilizer === "") newPlant.fertilizer = plant[0].attributes.fertilizer;
            if (newPlant.size === "") newPlant.size = plant[0].attributes.size;
            if (newPlant.place === "") newPlant.place = plant[0].attributes.place;
            if (newPlant.light === "") newPlant.light = plant[0].attributes.light;
            if (newPlant.water === "") newPlant.water = plant[0].attributes.water;
            if (newPlant.category === "") newPlant.category = plant[0].attributes.category;
            updatePlant(plant[0], newPlant);
            setAdd(false);
        }
      }, [newPlant, add]);

    const onChange = (e) => {
        e.preventDefault();
        const { name, value: newValue } = e.target;
        setNewPlant({
        ...newPlant,
        [name]: newValue
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setAdd(true);
    }
    
    return (
        <section>
          <h1>Edit</h1>
          <div>
          {plant.length > 0 && (
        plant.map(
          (plant) => (
            <div className="each" key={plant.get("nickname")}>
            <h2>{plant.get("nickname")}</h2>
            <form onSubmit={onSubmit} autoComplete="off">
    {/* Checking to see if the user if logging in or registering */}
    {/* Only display "First Name" and "Last Name" if user is registering*/}
    <div className="auth-top">
        <div>
          <label>Nickname</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="nickname-input"
            value={newPlant.nickname}
            onChange={onChange}
            name="nickname"
            placeholder={plant.get("nickname")}
          />
        </div>
        <div className="form-group">
          <label>Fertilizer</label>
          <br />
          {/* <input
            type="textarea"
            className="form-control"
            id="fertilizer-input"
            value={newPlant.fertilizer}
            onChange={onChange}
            name="fertilizer"
            placeholder={plant.get("fertilizer")}
          /> */}
          <textarea type="textarea"
            className="form-control"
            id="fertilizer-input"
            value={newPlant.fertilizer}
            onChange={onChange}
            name="fertilizer"
            placeholder={plant.get("fertilizer")}
            />
        </div>
        <div>
          <label>Size</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="size-input"
            value={newPlant.size}
            onChange={onChange}
            name="size"
            placeholder={plant.get("size")}
          />
        </div>
        <div>
          <label>Place</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="place-input"
            value={newPlant.place}
            onChange={onChange}
            name="place"
            placeholder={plant.get("place")}
          />
        </div>
        <div>
          <label>Light</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="light-input"
            value={newPlant.light}
            onChange={onChange}
            name="light"
            placeholder={plant.get("light")}
          />
        </div>
        <div>
          <label>Water</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="water-input"
            value={newPlant.water}
            onChange={onChange}
            name="water"
            placeholder={plant.get("water")}
          />
        </div>
        <div>
          <label>Category</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="category-input"
            value={newPlant.category}
            onChange={onChange}
            name="category"
            placeholder={plant.get("category")}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
    </div>
  </form>
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