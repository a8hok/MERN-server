import { detailPageModel } from "../../Schema/detailpageSchema.js";

export const detail = (req, res) => {
  if (
    req.body.title &&
    req.body.titleDescription &&
    req.body.subDescription == 0
  ) {
    res.status(200).send({
      message: "Please enter all details",
    });
  } else {
    const detailMenu = new detailPageModel({
      title: req.body.title,
      titleDescription: req.body.titleDescription,
      subDescription: req.body.subDescription,
    });
    detailMenu.save((err, data) => {
      if (err) {
        return res.send(err);
      }
      return res.status(200).send({
        message: "Added Successfully!!",
      });
    });
  }
};
