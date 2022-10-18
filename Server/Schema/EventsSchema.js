import mongoose from "mongoose";

const topEventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true
    },
    eventDescription: {
      type: String,
      requried: true
    },
    eventImage: {
      data: Buffer,
      contentType: String
    },
    eventId: {
      type: String
    },
    eventDate: {
      type: String,
      required: true
    },
    eventTime: {
      type: String,
      require: true
    }
  },
  { timestamps: true }
);
export const eventModel = new mongoose.model("topEvent", topEventSchema);
