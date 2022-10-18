import { NewStudentDetails } from "../Schema/SignupSchema.js";

import Jwt from "jsonwebtoken";

import fs from "fs";

import bcrypt from "bcryptjs";

const { sign, verify } = Jwt;

export const createUser = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  let existingTourist;

  try {
    existingTourist = await NewStudentDetails.findOne({ email: email });
  } catch (err) {
    console.log(err);
  }

  if (existingTourist) {
    return res.send({
      status: 400,
      message: "Only one Tourist for one Email",
    });
  }

  const hashed = bcrypt.hashSync(password);
  const credentials = new NewStudentDetails({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: hashed,
    userimage: {
      data: fs.readFileSync("profilepic/" + req.file.filename),
      contentType: "image/png",
    },
  });
  credentials.save((err, data) => {
    if (err) {
      res.send(err);
    }
    res.send({
      status: 201,
      message: "user is created",
      data: data,
    });
  });
};
