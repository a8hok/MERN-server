import { topicModel } from "../../Schema/topicsSchema.js";

export const topics = (req, res) => {
  topicModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      return res.send({
        status: 200,
        message: "places found",
        data: data,
      });
    }
  });
};
