const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: String,
  email: String,
  password: String
});

userSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.getSaltSync(8), null);
}

mongoose.model("user", userSchema);
