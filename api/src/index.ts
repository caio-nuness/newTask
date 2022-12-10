import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import { routes } from './routes';

dotenv.config();
const PASSWORD_DB = process.env.PASSWORD_DB;
const USER_DB = process.env.USER_DB;
const NAME_DB = process.env.NAME_DB;
const PORT = process.env.PORT;

mongoose.set('strictQuery', false);

mongoose.connect(`mongodb+srv://${USER_DB}:${PASSWORD_DB}@${NAME_DB}/test`)
  .then(() => {
    console.log('mongodb as conected!');

    const app = express();

    app.use(express.json());
    app.use(routes);

    app.listen(PORT, () => {
      console.log(`Server is running in http://localhost/${PORT}`);
    });
  })
  .catch((err) => console.error(err));







