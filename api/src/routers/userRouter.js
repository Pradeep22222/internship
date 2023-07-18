import express from "express";
import {
  addUser,
  deleteUser,
  getAllUsers,
  updateuser,
} from "../model/userModel.js";
const router = express.Router();
router.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    users.length
      ? res.json({
          status: "success",
          message: "The users has been returned",
          users,
        })
      : res.json({
          status: "error",
          message: "Users couldn't be returned,try again later",
        });
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);
    const user = await addUser(data);
    user._id
      ? res.json({ status: "success", message: "The user has been added" })
      : res.json({
          status: "error",
          message: "Couldn't add the user, try again later",
        });
  } catch (error) {
    next(error);
  }
});
router.put("/", async (req, res, next) => {
  try {
    const data = req.body;
    const user = await updateuser(data);
    user._id
      ? res.json({ status: "success", message: "The user has been updated" })
      : res.json({
          status: "error",
          message: "Couldn't update the user, try again later",
        });
  } catch (error) {
    next(error);
  }
});
router.delete("/:_id", async (req, res, next) => {
  try {
    const { _id } = req.params;
    console.log(_id);
    const user = await deleteUser(_id);
    user._id
      ? res.json({ status: "success", message: "The user has been deleted" })
      : res.json({
          status: "error",
          message: "Couldn't delete the user, try again later",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
