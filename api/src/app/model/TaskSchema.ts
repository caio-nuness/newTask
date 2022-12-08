import { Schema, model } from 'mongoose';

export const TaskSchema = model('task', new Schema({
  title: {
    type: String,
    required: true,
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
