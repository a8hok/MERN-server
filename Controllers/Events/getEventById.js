import { eventModel } from "../../Schema/EventsSchema.js";

export const EventById = (req, res) => {
  eventModel.find({ eventId: req.query.eventId }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data.length) {
        return res.send({
          status: 200,
          message: "Event found",
          data: data,
        });
      } else {
        return res.send({
          status: 404,
          message: "Id not fount",
        });
      }
    }
  });
};
