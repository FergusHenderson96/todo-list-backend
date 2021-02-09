const { User } = require("../models/User");

exports.getMyProfile = async (req, res) => {
    res.status(200).send(req.user)
  };
  exports.addUser = async (req, res) => {
    //this function adds a user to the database
    try {
      const user = new User(req.body);
      //adds details from User/models Schema
      const savedUser = await user.save();
      //saves user
      console.log(req.body);
      //logs the details
      res.status(201).send({savedUser});
      //({savedUser: savedUser}) 
    } catch (error) {
      if(error.code === 11000) {
        res.status(400).send({ message: "User already exists" });
      }
      res.status(500).send({ message: "Could not connect" });
    }
  };
  
  exports.updateUserById = async (req, res) => {
    //this function updates a users details by searching their id
    try {
      const user = await User.findByIdAndUpdate(req.user._id, req.body, { new: true });
      //searches for user     finds user by id   id given    new password   
      console.log(user);
      res.status(200).send(user);
      //if user found, displays 202 code
    } catch (error) {
      res.status(404).send({ message: "User not found" });
      //if user not found by id then 404 displayed
    }
  };
  
  exports.deleteUser = async (req, res) => {
    //this function deletes a user by id
    try {
      // const user = await User.findByIdAndDelete(req.user._id);
      await req.user.remove();
      res.status(200).send(user);
    } catch (error) {
      res.status(404).send({ message: "User not found" });
    }
  };
  
  exports.login = async (req, res) => {
      //this function logs in user by 
    try {
      const user = await User.findByCredentials(req.body.email, req.body.password);
      res.status(200).send({user});
    } catch (error) {
      res.status(400).send({message: "Unable to login"});
    }
  }
  
  exports.logout = async (req, res) => {
    try {
  await req.user.save()
  res.status(200).send({message: "Successfully logged out"})
    } catch {
  res.status(500).send({message: "Unable to log you out"})
    }
  }