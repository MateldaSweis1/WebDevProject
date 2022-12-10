import React, {useEffect, useState} from "react";
import { checkUsername, getUser, getUsername, resetPassword } from "../Auth/AuthService";
import { Link } from "react-router-dom";

const AuthForgotPassword = () => {

    const [user, setUser] = useState([])
    const [add, setAdd] = useState(false);

    useEffect(() => {
        if (user && add) {
            console.log("here");
            checkUsername(user.email);
            setAdd(false);
        }
      }, [user, add]);

    const onChangeHandler = (e) => {
        e.preventDefault();
        const { name, value: newValue } = e.target;
        setUser({
          ...user,
          [name]: newValue
        });
      };
    
      const onSubmitHandler = (e) => {
        e.preventDefault();
        setAdd(true);
      };

    return (
        <section>
          <h1>Enter Your Username:</h1>
          <div className="ProfileElem">
          <form onSubmit={onSubmitHandler} autoComplete="off">
          <div className="form-group">
          <div className="form-group">
          <label>Email</label>
          <br />
          <input
            type="email"
            className="form-control"
            id="email-input"
            value={user.email}
            onChange={onChangeHandler}
            name="email"
            required
          />
        </div>
          <button type="submit" className="btn btn-primary" onSubmit={onSubmitHandler}>
            Submit
          </button>
        </div>
              </form>
        </div>
        <div>
        <Link to="/auth/login">
            <button>Back</button>
          </Link>
        </div>
        </section>
    );
}

export default AuthForgotPassword;