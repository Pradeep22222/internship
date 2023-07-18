import userSchema from "./userSchema.js";

export const getAllUsers = () => {
  return userSchema.find();
};

export const addUser = (obj) => {
  return userSchema(obj).save();
};

export const updateuser = ({ _id, ...update }) => {
  return userSchema.findByIdAndUpdate(_id, update, { new: true });
};

export const deleteUser = (_id) => {
  return userSchema.findByIdAndDelete(_id);
};
