import { topicModel } from "../../Schema/topicsSchema.js";

export const uploadTopics = (req, res) => {
  if (req.body.topicTitle && req.body.topicDescription == 0) {
    res.status(200).send({
      message: "Enter both the fields",
    });
  } else {
    const topicDetails = new topicModel({
      topicTitle: req.body.topicTitle,
      topicDescription: req.body.topicDescription,
      eventId: Math.floor(1000 + Math.random() * 9000),
    });
    topicDetails.save((err, data) => {
      if (err) {
        res.send(err);
      }
      res.status(200).send({
        message: "Added Successfully!!!",
      });
    });
  }
};
