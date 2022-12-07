import express from 'express';
import mongoose from 'mongoose';

import { routes } from './routes';


mongoose.set('strictQuery', false);

async function startApp() {
  await mongoose.connect('mongodb://localhost:27017');
  console.log('mongodb as conected!');

  const port = 3000;
  const app = express();

  app.use(routes);

  app.listen(port, () => {
    console.log(`Server is running in http://localhost/${ port }`);
  });
}

startApp();






