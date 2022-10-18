import mongoose from "mongoose";

// S.No.	ProgrammeType 	Programme	Name	Discipline

const listOfexceltoJSON = new mongoose.Schema({
  "S.No": {
    type: Number,
  },
  ProgrammeType: {
    type: String,
  },
  Programme: {
    type: String,
  },
  Name: {
    type: String,
  },
  Discipline: {
    type: String,
  }
});

export const ListOfProgramme = new mongoose.model(
    "listofProgramme",
    listOfexceltoJSON
    );
