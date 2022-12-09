import { Request, Response } from 'express';
import { TaskSchema } from '../../model/TaskSchema';

export async function createTask (req:Request, res:Response) {
  try {

    const taskCreated = await TaskSchema.create(req.body);

    res.json({ taskCreated });

  } catch (err) {
    console.log(err);
  }
}
