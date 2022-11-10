import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { checkUser } from "./AuthService";


const ProtectedRoute = ({ element: Component, ...rest }) => {
  console.log("element: ", Component);
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate("/auth");
  };

  if (checkUser()) {
    return <Component />;
  } else {
    return (
      <div>
        <p>Unauthorized!</p> <button onClick={goBackHandler}>Go Back.</button>
        {navigate("/auth")}
      </div>

    );
  }
};

export default ProtectedRoute;
