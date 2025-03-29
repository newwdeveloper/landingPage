import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,

    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  phone: {
    type: Number,
    required: true,
    validate: {
      validator: function (v) {
        return /^[0-9]{10}$/.test(v.toString()); // Ensures it's a 10-digit number
      },
      message: "Phone number must be a 10-digit number",
    },
  },
  message: {
    type: String,
    required: true,
  },
});

const Form = mongoose.model("Form", formSchema);
export default Form;
