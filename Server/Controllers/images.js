import { ImgSchema } from "../Schema/images.js";
import fs from "fs";
// import { eventData } from "./Events.js";

export const AddImages = async(req, res) => {
  console.log(req.file,"profile")
  const UploadingImage = new ImgSchema({
    profilePic: {
      data: fs.readFileSync("profile/" + req.file.filename),
      contentType: "image/png"
    }
  })
  UploadingImage.save((err, data) => {
    if (err) {
      res.send(err)
    }
    res.send({
      status: 200,
      message: "Image is added",
      data: data
    })
  })
};
