import { Schema, model } from "mongoose";

const giftSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    relationships: {
      type: [String],
      required: true,
    },

    occasions: {
      type: [String],
      required: true,
    },

    ageGroup: {
      min: {
        type: Number,
        required: true,
      },
      max: {
        type: Number,
        required: true,
      },
    },

    hobbies: {
      type: [String],
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    inStock: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model("Gift", giftSchema);
