import mongoose from "mongoose";
const addQuizSchema = new mongoose.Schema(
  {
    quizQuestionNo:
    {
    type:Number,
    require:true
    },
    quizQuestion: {
      type: String,
      required: true,
    },
    quizOption1: {
      type: String,
      required: true,
    },
    quizOption2: {
      type: String,
      required: true,
    },
    quizOption3: {
      type: String,
    },
    quizOption4: {
      type: String,
    },
    quizAnswer: {
      type: String,
    },
  },
  { timestamps: true }
);
export const addQuizModel = new mongoose.model("addQuiz", addQuizSchema);
