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

export const getUsername = (username) => {
  const user = new Parse.User();
  const query = new Parse.Query(user);
  return query.get(username).then((user)=> {
    return true;
  }).catch((error) => {
    alert(`Error: username does not exist`);
    return false;
  });
}

export const resetPassword = async function (email) {
  try {
    await Parse.User.requestPasswordReset(email);
    alert("See email to reset password!");
    return true;
  } catch(error) {
    alert(`Error! ${error}`);
    return false;
  }
}

export const checkUsername = (username) => {
  const users = Parse.Object.extend("User");
  const query = new Parse.Query(users);
  return query.find().then((results) => {
    const usernames = results.map((res) => res.attributes.username);
    if (usernames.includes(username)) return resetPassword(username);
    else {
      alert("Username not valid!");
      return false
    };
  })
}

// Check the authentication status of the user
export const checkUser = () => {
  return Parse.User.current()?.authenticated;
};

export const getUser = () => {
  return Parse.User.current().attributes;
}

export const updateUsername = (username) => {
  console.log(username)
  const User = Parse.Object.extend("User");
  const query = new Parse.Query(User);
  const id = Parse.User.current().id;
  console.log(id);
  return query.get(id).then((user) => {
    user.set("username", username);
    user.save();
    return user;
  }).catch((error) => {
    alert("Error: ", error);
    return false;
  });
}

export const updateEmail = (email) => {
  const User = Parse.Object.extend("User");
  const query = new Parse.Query(User);
  const id = Parse.User.current().id;
  return query.get(id).then((user) => {
    user.set("email", email);
    user.save();
    return user.get("email");
  }).catch((error) => {
    alert("Error: ", error);
    return false;
  });
}

export const updateFirstName = () => {
  
}

export const updateLastName = () => {
  
}

export const updateUser = (newUser) => {

  return updateUsername(newUser.username).then((user)=>{
    updateEmail(user.attributes.username).then((user) => {
      return user;
    })
    console.log(user.attributes.username);
    return true;
  }).catch((error) => {
    console.log("Error: ", error);
    return false;
  })

  // const UserPlants = Parse.Object.extend("UserPlants");
  // const query = new Parse.Query(UserPlants);
  const user = Parse.Object.extend("User");
  const query = new Parse.Query(user);

  return query.get(Parse.User.current().objectId).then((user)=> {
    //user.set('objectId', Parse.User.current().objectId)
    user.set('username', newUser.username);
    user.set('firstName', newUser.firstName);
    user.set('lastName', newUser.LastName);
    //user.set('password', Parse.User.current().attributes.password);
    user.set('email', newUser.email);
    user.save();
    return user;
  }).catch((error)=> {
    alert("Error: ", error);
    return false;
  });

  //const user = new Parse.User();
  const oldUser = getUser();



  user.set('objectId', oldUser.objectId)
  user.set('username', newUser.username);
  user.set('firstName', newUser.firstName);
  user.set('lastName', newUser.LastName);
  user.set('password', oldUser.password);
  user.set('email', newUser.email);

  // try {
  //   await user.save();
  //   console.log("HERE::",updatedUser);
  //   return updatedUser;
  // } catch (error) {
  //   alert("Error: ", error);
  //   return false;
  // }


  return user.save()
  // .then((updatedUser) => {
  //   console.log("HERE::",updatedUser);
  //   return updatedUser;
  // }).catch((error) => {
  //   alert("Error", error)
  //   return null;
  // })
  // user.set("username", newUser.username);
  // user.set("firstName", newUser.firstName);
  // user.set("lastName", newUser.LastName);
  console.log("NEW::::", user);
  return newUser;

  // const tempUser = new Parse.User();
  // const query = new Parse.Query(tempUser);
  // return query.get(user.id).then((currUser)=> {
  //   user.set("username", newUser.username);
  //   user.set("firstName", newUser.firstName);
  //   user.set("lastName", newUser.LastName);
  //   console.log("HERE:::::", currUser);
  //   console.log("ASNAKSLN::::", newUser);
  // }).catch((error) => {
  //     alert(`Error: ${error.message}`);
  //   });
  // const query = new Parse.Query(user);
  // return query.get(oldUser).then((user) => {
  //   user.update(newUser);
  //   console.log(user);
  // }).catch((error) => {
  //   alert(`Error: ${error.message}`);
  // });;

}
