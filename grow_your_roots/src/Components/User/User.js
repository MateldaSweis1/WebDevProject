import React from "react";
import { Link } from "react-router-dom";
import UserPlantDetails from "./UserPlantDetails";



const UserProfile = () => {

    return (
        <section>
          <h1>Grow My Roots</h1>
          <div>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
        <div>
          <h1>These are your plants:</h1>
          <UserPlantDetails />
        </div>
        </section>
    );
}

export default UserProfile;
