import { Request, Response } from 'express';
import { TaskSchema } from '../../model/TaskSchema';

export const listTasks = async (req:Request, res:Response) => {
  try {
    const myTasks = await TaskSchema.find();
    res.status(200).json(myTasks);

  } catch (err) {
    res.status(400).send({'Error':'error to list tasks.'});
  }
};
