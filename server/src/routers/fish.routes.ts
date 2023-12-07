import * as express from "express";
import { Fish, FishDocumentInterface } from "../models/fish.js";

export const fishRouter = express.Router();

// Adds a fish
fishRouter.post("/fishes", async (req, res) => {
  try {
    const fish = new Fish({
      ...req.body,
    });

    // Adds the fish to the database
    await fish.save();
    return res.status(201).send(fish);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// Gets all fishes
fishRouter.get("/fishes", async (req, res) => {
  try {
    // Checks if fish exists
    const fishes = await Fish.find();

    // Sends the result to the client
    if (fishes) {
      return res.status(200).send(fishes);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send(error);
  }
});

// Gets fish by cientific name
fishRouter.get("/fishes/:cientific_name", async (req, res) => {
  try {
    // Checks if fish exists
    const fish = await Fish.findOne({
      cientific_name: req.params.cientific_name,
    });

    // Sends the result to the client
    if (fish) {
      return res.status(200).send(fish);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send(error);
  }
});

// Updates fish by cientific name
fishRouter.patch("/fishes/:cientific_name", async (req, res) => {
  try {
    // Checks if update is allowed
    const allowedUpdates = [
      "name",
      "cientific_name",
      "image_url",
      "description",
      "minimum_size",
      "habitat",
      "recommended_bait",
    ];
    const actualUpdates = Object.keys(req.body);
    const isValidUpdate = actualUpdates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!isValidUpdate) {
      return res.status(400).send({
        error: "Actualización no permitida",
      });
    }

    const updatedFish = await Fish.findOneAndUpdate(
      { cientific_name: req.params.cientific_name },
      {
        ...req.body,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    // Sends the result to the client
    if (updatedFish) {
      return res.status(200).send(updatedFish);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send(error);
  }
});

// Deletes fish by cientific name
fishRouter.delete("/fishes/:cientific_name", async (req, res) => {
  try {
    // Deletes the fish
    const deletedFish = await Fish.findOneAndDelete({
      cientific_name: req.params.cientific_name,
    });

    // Sends the result to the client
    if (deletedFish) {
      return res.status(200).send(deletedFish);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send(error);
  }
});
