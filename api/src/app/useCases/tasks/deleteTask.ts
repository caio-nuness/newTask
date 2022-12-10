import { Request, Response } from 'express';
import { TaskSchema } from '../../model/TaskSchema';

export const deleteTask = async (req:Request, res:Response) => {
  try {
    const { taskId } = req.params;

    await TaskSchema.findByIdAndRemove( taskId );

    res.status(200).send({sucess: 'your task has been deleted.'});


  } catch (error) {

    res.status(400).send({error: 'Error deleting task.'});

  }
};



