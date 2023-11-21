import * as express from "express";
import { User, UserDocumentInterface } from "../models/user.js";

export const userRouter = express.Router();

// Gets users by name
userRouter.get("/users", async (req, res) => {
  try {
    // Gets users from the database
    const filter = req.query.username ? { username: req.query.username } : {};
    const user = await User.findOne(filter);

    // Sends the result to the client
    if (user) {
      return res.status(200).send(user);
    }
    return res.status(404).send(`Failed to find the user`);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// Adds an user
userRouter.post("/users", async (req, res) => {
  try {
    // Adds the user to the database
    const user = new User({
      ...req.body,
    });
    await user.save();

    // Sends the result to the client
    return res.status(201).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// Updates user by ID
userRouter.patch("/users/:username", async (req, res) => {
  try {
    // Checks if update is allowed
    const allowedUpdates = ["email", "username", "name", "password", "image"];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate = actualUpdates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!isValidUpdate) {
      return res.status(400).send({
        error: "Actualización no permitida",
      });
    }

    // Updates the user
    const userToUpdate = await User.findOne({
      username: req.params.username.toString(),
    });
    const updatedUser = await User.findOneAndUpdate(
      { username: req.params.username },
      {
        ...req.body,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    // Updates the user information in the other collections
    if (userToUpdate && updatedUser) {
      return res.send(updatedUser);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send(error);
  }
});

// Deletes user by ID
userRouter.delete("/users/:username", async (req, res) => {
  try {
    // Deletes the user
    const deletedUser = await User.findOneAndDelete({
      username: req.params.username.toString(),
    });

    if (deletedUser) {
      // Sends the result to the client
      return res.send(deletedUser);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send(error);
  }
});
