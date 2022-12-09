import { Request, Response } from 'express';
import { TaskSchema } from '../../model/TaskSchema';

export const updateTasks = async (req:Request, res:Response) => {
  try {
    const { taskId } = req.params;

    const taskUpdated = await TaskSchema.findByIdAndUpdate(taskId, req.body);

    res.status(200).send({sucess: 'your task has been updated.'});

  } catch (error) {
    res.status(400).send({error: 'error when updating your task.'});
  }
};

