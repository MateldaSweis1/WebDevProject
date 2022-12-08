import React, {useEffect, useState} from "react";
import { getUser, updateUser } from "../Auth/AuthService";
import { Link } from "react-router-dom";

const ProfileEdit = () => {

    const [user, setUser] = useState([])
    const [add, setAdd] = useState(false)
    const [tempUser, setTempUser] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: ""
    });

    useEffect(()=> {
        setUser(getUser());
        console.log(user);
    }, []);


    useEffect(() => {
        if (tempUser && add) {
            if (tempUser.firstName === "") tempUser.firstName = user.firstName;
            if (tempUser.lastName === "") tempUser.lastName = user.lastName;
            if (tempUser.username === "") tempUser.username = user.username;
            tempUser.email = tempUser.username;
            console.log(tempUser);
            updateUser(tempUser);
            setAdd(false);
        }
      }, [tempUser, add]);

    const onChange = (e) => {
        e.preventDefault();
        const { name, value: newValue } = e.target;
        setTempUser({
        ...tempUser,
        [name]: newValue
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setAdd(true);
    }

    return (
        <section>
          <h1>My Profile</h1>
          <form onSubmit={onSubmit} autoComplete="off">
    {/* Checking to see if the user if logging in or registering */}
    {/* Only display "First Name" and "Last Name" if user is registering*/}
    <div className="auth-top">
        <div>
          <label>First Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="first-name-input"
            value={tempUser.firstName}
            onChange={onChange}
            name="firstName"
            placeholder={user.firstName}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="last-name-input"
            value={tempUser.lastName}
            onChange={onChange}
            name="lastName"
            placeholder={user.lastName}
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <br />
          <input
            type="username"
            className="form-control"
            id="email-input"
            value={tempUser.username}
            onChange={onChange}
            name="username"
            placeholder={user.username}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
    </div>
  </form>
        <div>
            <Link to="/users/profile">
                <button>Cancel</button>
            </Link>
        </div>
        </section>
    );
}

export default ProfileEdit;