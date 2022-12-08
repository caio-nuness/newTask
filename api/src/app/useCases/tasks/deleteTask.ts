import {Request, Response} from 'express';
import { TaskSchema } from '../../model/TaskSchema';

export const deleteTask = async (req:Request, res:Response) => {
  try {
    const { taskId } = req.params;
    await TaskSchema.findByIdAndRemove( taskId );
    res.status(200).send({message: 'Task deletada com sucesso!'});


  } catch (error) {
    res.status(400).send({message: 'Erro ao deletar task'});
  }
};



