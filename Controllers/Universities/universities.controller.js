import { excelToJsonModel } from "../../Schema/excelToJson.js";

const getUniversities = (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  excelToJsonModel
    .find((err, data) => {
      if (err) {
        console.log(err);
      } else {
        return res.send({
          status: 200,
          message: "Universities details",
          data: data,
        });
      }
    })
    .limit(limit * 1)
    .skip((page - 1) * limit);
};

const postUniversities = (req, res) => {
  excelToJsonModel
    .insertMany(req.body)
    .then(function (response) {
      return res.send("Data inserted");
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
};

export { getUniversities, postUniversities };
