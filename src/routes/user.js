const { Router } = require("express");
const { getMyProfile, addUser, updateUserById, deleteUser, login, logout } = require("../controllers/users");
//imports functions from users controller
const {hashPassword, auth} = require("../middleware/");
const userRouter = Router();
//creates a mini version of the router 

userRouter.get("/users/myProfile", auth, getMyProfile);
// requests profile through get request
userRouter.post("/users", hashPassword, addUser);
// adds user through post request
userRouter.patch("/users/:id", auth, hashPassword, updateUserById);
// updates user via user id
userRouter.delete("/users/:id", auth, deleteUser);
// deletes user via id
userRouter.post("/users/login", login);
// logs user in via post request
userRouter.get("/users/logout", auth, logout);
// logs user out via get request

module.exports = {
  userRouter,
};