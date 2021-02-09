const { Router } = require("express");
const { getMyProfile, addUser, updateUserById, deleteUser, login, logout } = require("../controllers/users");
//imports functions from users controller
const userRouter = Router();
//creates a mini version of the router 

userRouter.get("/users/myProfile", getMyProfile);
// requests profile through get request
userRouter.post("/users", addUser);
// adds user through post request
userRouter.patch("/users/:id", updateUserById);
// updates user via user id
userRouter.delete("/users/:id", deleteUser);
// deletes user via id
userRouter.post("/users/login", login);
// logs user in via post request
userRouter.get("/users/logout", logout);
// logs user out via get request

module.exports = {
  userRouter,
};