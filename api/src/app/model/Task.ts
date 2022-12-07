import { Schema, model } from 'mongoose';

export const Task = model('Task', new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  }
}));
