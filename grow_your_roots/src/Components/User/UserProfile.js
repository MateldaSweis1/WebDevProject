import React, {useEffect, useState} from "react";
import Parse from "parse";
import { getUser } from "../Auth/AuthService";
import { Link } from "react-router-dom";
// import UserPlantDetails from "./UserPlantDetails";

const Profile = () => {

    const [user, setUser] = useState([])

    useEffect(()=> {
        setUser(getUser());
        console.log(user);
    }, []);

    return (
        <section>
          <h1>My Profile</h1>
          <div className="ProfileElem">
              <h3>Username: {user.username}</h3>
        </div>
        <div className="ProfileElem"> 
              <h3>Email: {user.email}</h3>
        </div>
        <div className="ProfileElem"> 
              <h3>First Name: {user.firstName}</h3>
        </div>
        <div className="ProfileElem">
              <h3>Last Name: {user.lastName}</h3>
        </div>
        <div>
        <Link to="/users">
            <button>Back</button>
          </Link>
        </div>
        </section>
    );
}

export default Profile;