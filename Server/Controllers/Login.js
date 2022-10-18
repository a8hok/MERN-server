import { userModel } from "../Schema/userSchema.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const body = req.body;
  const data = await userModel.findOne({ userEmail: body.userEmail });

  if (data) {
    const validPassword = await bcrypt.compare(
      body.userPassword,
      data.userPassword
    );
    if (validPassword) {
      res.status(200).send({ message: "Login success", data });
    } else {
      res.status(200).send({ error: "Invalid Credentials" });
    }
  } else {
    res.status(401).send({ error: "User does not exist" });
  }
};
