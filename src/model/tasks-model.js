// src/model/tasks-model.js
import { tasks } from '../mock/task.js';

export default class TasksModel {
  #boardTasks = tasks;

  getTasks() {
    return this.#boardTasks;
  }

  getTasksByStatus(status) {
    return this.#boardTasks.filter(task => task.status === status);
  }

  addTask(task) {
    this.#boardTasks.push(task);
  }

  removeTask(taskId) {
    this.#boardTasks = this.#boardTasks.filter(task => task.id !== taskId);
  }

  updateTaskStatus(taskId, newStatus) {
    const task = this.#boardTasks.find(t => t.id === taskId);
    if (task) {
      task.status = newStatus;
    }
  }

  clearTrash() {
    this.#boardTasks = this.#boardTasks.filter(task => task.status !== 'trash');
  }
}
