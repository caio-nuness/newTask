import {Request, Response} from 'express';

export const deleteTask = (req:Request, res:Response) => {
  res.send(' tasks deletada');
};
