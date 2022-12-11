"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TaskSchema = (0, mongoose_1.model)('task', new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
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
