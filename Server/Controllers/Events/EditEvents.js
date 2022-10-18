import { eventModel } from "../../Schema/EventsSchema.js";

export const editEvent = (req, res) => {
  eventModel.updateOne(
    { eventId: req.body.eventId },
    {
      $set: {
        eventName: req.body.eventName,
        eventDescription: req.body.eventDescription,
        eventImage: req.body.eventImage,
        eventDate: req.body.eventDate,
        eventTime: req.body.eventTime
      },
    },
    { upsert: true },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        return res.send({
          status: 200,
          message: "updated events",
          data: data,
        });
      }
    }
  );
};
