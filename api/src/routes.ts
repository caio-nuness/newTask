import { Router } from 'express';

import { createTask } from './app/useCases/tasks/createTask';
import { listTasks } from './app/useCases/tasks/listTasks';
import { updateTasks } from './app/useCases/tasks/updateTask';
import { deleteTask } from './app/useCases/tasks/deleteTask';

export const routes = Router();

routes.get('/tasks', listTasks);

routes.post('/task/create', createTask);

routes.patch('/task/update/:taskId', updateTasks);

routes.delete('/task/delete/:taskId', deleteTask);
