// src/view/task-component.js
import { createElement } from '../framework/render.js';
import { StatusClasses } from '../const.js';

function createTaskComponentTemplate(task) {
  const { title, status } = task;
  const statusClass = StatusClasses[status] || '';
  
  return `
    <li class="task-card task--${statusClass}">
      ${title}
    </li>
  `;
}

export default class TaskComponent {
  constructor({ task }) {
    this.task = task;
    this.element = null;
  }

  getTemplate() {
    return createTaskComponentTemplate(this.task);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
