import { Document, Schema, model } from "mongoose";

export interface FishDocumentInterface extends Document {
  name: string;
  cientific_name: string;
  description: string;
  image_url: string;
  minimum_size: number;
  habitat: string;
  recommended_bait: string;
}

const FishSchema = new Schema<FishDocumentInterface>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  cientific_name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  minimum_size: {
    type: Number,
    required: true,
    validate: (value: number) => {
      if (value <= 0) {
        throw new Error("La talla mínima del pez debe ser positiva");
      }
    },
  },
  habitat: {
    type: String,
    trim: true,
  },
  recommended_bait: {
    type: String,
    trim: true,
  },
});

export const Fish = model<FishDocumentInterface>("Fish", FishSchema);
