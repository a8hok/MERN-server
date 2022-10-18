import { eventModel } from "../../Schema/EventsSchema.js";
import fs from "fs"

export const editEvent = (req, res) => {
  const {eventId, eventName, eventDescription, eventDate, eventTime} = req.body
  eventModel.updateOne(
    { eventId: eventId },
    {
      $set: {
        eventName: eventName,
        eventDescription: eventDescription,
        eventImage: {
          data: fs.readFileSync("uploadimage/" + req.file.filename),
          contentType: "image/png"
        },
        eventDate: eventDate,
        eventTime: eventTime
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
