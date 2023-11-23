import * as express from "express";
import { User, UserDocumentInterface } from "../models/user.js";

export const userRouter = express.Router();

// Gets user by username
userRouter.get("/users", async (req, res) => {
  try {
    // Gets user from the database
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
    const user = new User({
      ...req.body,
    });

    // Checks if user already exists
    const userSearched = await User.findOne({ username: user.username });
    if (userSearched) {
      return res.status(202).send("El usuario ya existe");
    }

    // Adds the user to the database
    await user.save();
    return res.status(201).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// Updates user by username
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

    // Sends the result to the client
    if (userToUpdate && updatedUser) {
      return res.send(updatedUser);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send(error);
  }
});

// Deletes user by username
userRouter.delete("/users/:username", async (req, res) => {
  try {
    // Deletes the user
    const deletedUser = await User.findOneAndDelete({
      username: req.params.username.toString(),
    });

    // Sends the result to the client
    if (deletedUser) {
      return res.send(deletedUser);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send(error);
  }
});
