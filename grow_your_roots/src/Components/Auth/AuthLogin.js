import React, { useEffect, useState } from "react";
import { checkUser, loginUser } from "./AuthService";
import AuthForm from "./AuthForm";
import { useNavigate, Link } from "react-router-dom";

const AuthLogin = () => {
  const navigate = useNavigate();

  // default user var that can be passed down during auth process
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: ""
  });
  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (checkUser()) {
      navigate("/");
    }
  }, [navigate]);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (currentUser && add) {
      loginUser(currentUser).then((userLoggedIn) => {
        if (userLoggedIn) {
          alert(
            `${userLoggedIn.get("firstName")}, you have successfully logged in!`
          );
          navigate("/users");
        }
        setAdd(false);
      });
    }
  }, [navigate, currentUser, add]);


  // Event handlers for when user is filling out log in form
  const onChangeHandler = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const { name, value: newValue } = e.target;
    // console.log(newValue);
    setCurrentUser({
      ...currentUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log("submitted: ", e.target);
    setAdd(true);
  };

  // Login / register functionality displayed
  return (
    <div>
      <AuthForm
        user={currentUser}
        isLogin={true}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
      <div>
          <Link to="/auth/register">
            <button>Register</button>
          </Link>
        </div>
    </div>
  );
};

export default AuthLogin;
