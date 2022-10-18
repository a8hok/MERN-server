import morgan from "morgan";
import * as dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 8080;

const logger = morgan("combined");

// const mongoUrl = `mongodb+srv://wildbadger:${process.env.PASSWORD}@clusterbankapp.pn7rge3.mongodb.net/?retryWrites=true&w=majority`;

const mongoUrl = `mongodb+srv://${process.env.DB_userName}:${process.env.DB_password}@academy.ilmon77.mongodb.net/${process.env.DB_name}?retryWrites=true&w=majority`;

export { PORT, logger, mongoUrl };
