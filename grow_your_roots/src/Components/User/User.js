import React from "react";
import { Link } from "react-router-dom";
import UserPlantDetails from "./UserPlantDetails";
import UserFooter from "./UserFooter";
import Parse from "parse";

const UserProfile = () => {

  // If user is on user page, they are authenticated
  // Maintain this authentication while they nav to home page
  const goToHome = () => {
    Parse.User.current().authenticated = true;
  }

    return (
        <section>
          <h1>Grow My Roots</h1>
          <div>
          <Link to="/">
            <button onClick={goToHome}>Home</button>
          </Link>
        </div>
        <div>
          <h1>These are your plants:</h1>
          <UserPlantDetails />
        </div>
        <UserFooter />
        </section>
    );
}

export default UserProfile;
