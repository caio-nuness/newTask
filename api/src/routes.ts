import { Router } from 'express';

import { createTask } from './app/useCases/tasks/createTask';
import { listTasks } from './app/useCases/tasks/listTasks';
import { updateTasks } from './app/useCases/tasks/updateTask';
import { deleteTask } from './app/useCases/tasks/deleteTask';

export const routes = Router();

routes.get('/task', listTasks);

routes.post('/task/create', createTask);

routes.put('/task/:taskId', updateTasks);

routes.delete('/task/:taskId', deleteTask);
