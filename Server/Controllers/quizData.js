import { addQuizModel } from "../Schema/addQuizSchema.js";

export const quizData = (req, res) => {
  const { page, limit = 1 } = req.query;
  addQuizModel
    .find((err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send({
          status: 200,
          message: "quiz found",
          data: data,
        });
      }
    })

};
