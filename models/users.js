var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
  // `title` must be of type String
  email:	{
    type: String,
    required: "Email is Required",
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    trim: true,
    unique: true},
  password:	{
     type: String,
     trim: true,
     required: "Password is Required"},
  encryptedPassword: {
      type: String,
      trim: true,
      required: "password is required"
    },
  wishlist: {
    type: Schema.Types.ObjectId,
    ref: "Wishlist"
  },
  houses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Housing"
    }
  ]
  
  
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
