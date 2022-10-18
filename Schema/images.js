import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  profilePic: {
    data: Buffer,
    contentType: String
  }
});

export const ImgSchema = mongoose.model("profileimages", ImageSchema);
