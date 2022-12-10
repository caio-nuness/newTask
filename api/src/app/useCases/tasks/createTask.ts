import { Request, Response } from 'express';
import { TaskSchema } from '../../model/TaskSchema';

export async function createTask (req:Request, res:Response) {

  const { title, completed, createAt } = req.body;

  try {

    const taskCreated = await TaskSchema.create({
      title,
      completed,
      createAt
    });

    res.json({ taskCreated });

  } catch (err) {
    console.log(err);
  }
}
