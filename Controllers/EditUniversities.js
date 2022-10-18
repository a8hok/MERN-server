import { excelToJsonModel } from "../Schema/excelToJson.js";

export const editUniversities = (req, res) => {
    excelToJsonModel.updateOne(
    { S_No: req.body.S_No },
    {
      $set: {
        State: req.body.State,
        Type: req.body.Type,
        Yrofestab: req.body.Yrofestab,
        Location_Coordinates: req.body.Location_Coordinates,
        Name: req.body.Name,
        City: req.body.City,
        District: req.body.District,
        PIN: req.body.PIN,
        url: req.body.url,
        Phone: req.body.Phone,
        Village: req.body.Village,
        Email: req.body.Email,
        Image: req.body.Image,
        Logo: req.body.Logo,
      },
    },
    { upsert: true },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        return res.send({
          status: 200,
          message: "Updated Universities details",
          data: data,
        });
      }
    }
  );
};
