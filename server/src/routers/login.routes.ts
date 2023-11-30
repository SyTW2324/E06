import * as express from "express";
import { User, UserDocumentInterface } from "../models/user.js";

export const loginRouter = express.Router();

// Login
loginRouter.post("/login", async (req, res) => {
  try {
    // Checks if user exists
    const user = await User.findOne({ username: req.body.username });

    // Sends the result to the client
    if (user) {
      if (req.body.password == user.password) {
        return res
          .status(200)
          .send({
            username: user.username,
            name: user.name,
            email: user.email,
            image: user.image,
          });
      }
      return res.status(400).send(`Wrong password`);
    }
    return res.status(404).send(`Failed to find the user`);
  } catch (error) {
    return res.status(500).send(error);
  }
});
