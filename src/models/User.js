const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require ("jsonwebtoken");

const userSchema = new mongoose.Schema(
    //adds a new mongoose Schema (data structure) for creating user
    {
        name: {
            type: String,
            required: true,
        },
        //requires name to be input on the Schema
        email: {
            type: String, 
            required: true,
        },
        //requires email to be input on the Schema
        password: {
            type: String,
            required: true,
        }, 
        //requires password to be input on the Schema
        tokens: [{token: {type: String}}]
    },
    {timestamps: true}
    //shows times it created/last updated
);

userSchema.statics.findByCredentials = async (email, password) => {
    //async function that grabs the email and password from the Schema

    const user = await User.findOne({email});
    //creates a new user constant that searches for the email entered  
    //to see if its already been registered through creating account

    if (!user) {
        throw new Error ("Unable to login");
        //if the user doesnt exist, throw error that states, unable to login
}
const passwordsMatch = await bcrypt.compare(password, user.password);
  //compares password from the password entered and the password that is related to that user
  if(!passwordsMatch) {
    throw new Error("Unable to login");
    //if the passwords dont match, throws error unable to login
  }
  
  return user;
};

userSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({_id: this._id}, process.env.SECRET, {expiresIn: "1 week"});
  this.tokens.push({token});
  //({token: token})
  return token;
};

const User = mongoose.model("User", userSchema);
//creates new constant with user details entered in Schema

module.exports = {
  User,
};