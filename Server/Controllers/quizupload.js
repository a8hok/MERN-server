import { addQuizModel } from "../Schema/addQuizSchema.js";

export const addQuiz = (req, res) => {
  const body = req.body;
  if (!(body.quizQuestion && body.quizOption1 && body.quizOption2)) {
    res.status(200).send({
      message: "Please enter the questions and answer",
    });
  } else {
    const addQuizData = new addQuizModel({
      quizQuestion: body.quizQuestion,
      quizOption1: body.quizOption1,
      quizOption2: body.quizOption2,
      quizOption3: body.quizOption3,
      quizOption4: body.quizOption4,
      quizAnswer: body.quizAnswer,
    });

    console.log(addQuizData);

    addQuizData.save((err, data) => {
      console.log(data);
      if (err) {
        return res.send(err);
      } else {
        return res.status(200).send({
          message: "quiz added successfully!!",
        });
      }
    });
  }
};

