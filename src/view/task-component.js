import { createElement } from '../framework/render.js';

function createTaskComponentTemplate(taskText) {
  return (
    `<li class="task-card">
      ${taskText}
    </li>`
  );
}

export default class TaskComponent {
  constructor(taskText) {
    this.taskText = taskText;
    this.element = null;
  }

  getTemplate() {
    return createTaskComponentTemplate(this.taskText);
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
