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
    res.json({
      status: "success",
      message: "The users has been returned",
      users,
    });
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const user = await addUser(data);
    console.log(user);
    user._id
      ? res.json({ status: "success", message: "The user has been added" })
      : res.json({
          status: "error",
          message: "Can't add the user, please try again later",
        });
  } catch (error) {
    let message = error.message;
    if (message.includes("E11000 duplicate key error collection")) {
      res.json({
        status: "error",
        message: "Multiple users can't have  same email",
      });
    } else {
      next(error);
    }
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
    let message = error.message;
    if (message.includes("E11000 duplicate key error collection")) {
      res.json({
        status: "error",
        message: "User was not updated, multiple users can't have same email",
      });
    } else {
      next(error);
    }
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
