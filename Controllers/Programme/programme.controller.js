import { programSchemaModel } from "../../Schema/ProgramSchema.js";

const getProgramme = (req, res) => {
  const { page = 1, limit = 300 } = req.query;
  programSchemaModel
    .find((err, data) => {
      if (err) {
        console.log(err);
      } else {
        return res.send({
          status: 200,
          message: "Programme details",
          data: data,
        });
      }
    })
    .limit(limit * 1)
    .skip((page - 1) * limit);
};

const postProgramme = (req, res) => {
  programSchemaModel
    .insertMany(req.body)
    .then(function (response) {
      return res.send("Data inserted");
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
};

export { getProgramme, postProgramme };
