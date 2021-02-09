const { Router } = require("express");
const { getMyProfile, addUser, updateUserById, deleteUser, login, logout } = require("../controllers/users");
const userRouter = Router();
//creates a mini version of the router 

userRouter.get("/users/myProfile", getMyProfile);
userRouter.post("/users", addUser);
userRouter.patch("/users/:id", updateUserById);
userRouter.delete("/users/:id", deleteUser);
userRouter.post("/users/login", login);
userRouter.get("/users/logout", logout);

module.exports = {
  userRouter,
};