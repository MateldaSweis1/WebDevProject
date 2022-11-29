import Parse from "parse";

// Create a new user in the back4app database
export const createUser = (newUser) => {
  const user = new Parse.User();

  // Set the fields based on the user input
  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  return user
    .signUp()
    .then((newUserCreated) => {
      return newUserCreated;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// Log in the user
export const loginUser = (currUser) => {
  const user = new Parse.User();

  // Set the fields based on the user input
  user.set("password", currUser.password);
  user.set("username", currUser.email);

  return user
    .logIn(user.email, user.password)
    .then((currUserLoggedIn) => {
      return currUserLoggedIn;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// Check the authentication status of the user
export const checkUser = () => {
  return Parse.User.current()?.authenticated;
};

export const getUser = () => {
  return Parse.User.current().attributes;
}
