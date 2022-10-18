import mongoose from "mongoose";

const excelToJsonSchema = new mongoose.Schema({
  S_No: {
    type: Number,
  },
  State: {
    type: String,
  },
  Type: {
    type: String,
  },
  Yrofestab:{
    type: Number,
  },
  Location_Coordinates: {
    type: String,
  },
  Name: {
    type: String,
  },
  Name_1: {
    type: String,
  },
  City: {
    type: String,
  },
  District: {
    type: String,
  },
  PIN: {
    type: mongoose.Mixed,
  },
  url: {
    type: String,
  },
  Phone: {
    type: String,
  },
  Village: {
    type: String,
  },
  Email: {
    type: String,
  },
  Image: {
    type: String,
  },
  Logo: {
    type: String
  }
});

export const excelToJsonModel = new mongoose.model(
  "excelToJson",
  excelToJsonSchema
);
