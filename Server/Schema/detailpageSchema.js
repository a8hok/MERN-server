import mongoose from "mongoose";

const detailPageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    titleDescription: {
      type: String,
      required: true,
    },
    subDescription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const detailPageModel = new mongoose.model("Course", detailPageSchema);
