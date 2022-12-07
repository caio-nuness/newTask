import { Request, Response } from 'express';
import { Task } from '../../model/Task';

export const listTasks = async (req:Request, res:Response) => {
  try {
    const task = await Task.find();
    res.status(200).json(task);

  } catch (err) {
    console.error(err);
  }
};
