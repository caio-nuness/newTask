import {Request, Response} from 'express';

export const createTask = (req:Request, res:Response) => {
  res.send(' tasks criada');
};
