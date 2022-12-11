import { Schema, model } from 'mongoose';

export const TaskSchema = model('task', new Schema({
  title: {
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: false,
    default: 'Nenhuma descrição informada.'

  },
  completed: {
    type: Boolean,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now
  }
}));
