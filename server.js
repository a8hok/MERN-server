import Express from "express";
import { PORT, mongoUrl } from "./Config/config.js";
import mongoose from "mongoose";
import routes from "./Routes/Routes.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = Express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

mongoose.connect(
  mongoUrl,
  {
    useNewUrlParser: true,
    useUnifiedtopology: true,
  },
  (err) => {
    if (!err) {
      console.log("connected to db");
    } else {
      console.log("error", err);
    }
  }
);

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`);
});
