import mongoose from "mongoose";

const topicsSchema = new mongoose.Schema(
  {
    topicTitle: {
      type: String,
      required: true,
    },
    topicDescription: {
      type: String,
      required: true,
    },
    eventId: {
      type: String,
    },
  },
  { timestamps: true }
);
export const topicModel = new mongoose.model("topic", topicsSchema);
