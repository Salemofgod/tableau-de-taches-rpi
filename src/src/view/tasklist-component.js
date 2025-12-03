// src/view/tasks-list-component.js
import { createElement } from '../framework/render.js';
import { StatusNames, StatusClasses } from '../const.js';

function createTasksListComponentTemplate(status) {
  const title = StatusNames[status] || status;
  const cssClass = StatusClasses[status] || '';
  
  return `
    <div class="column">
      <div class="column-title ${cssClass}">${title}</div>
      <ul class="items-list" data-status="${status}">
        <!-- Les tâches seront ajoutées ici -->
      </ul>
      ${status === 'trash' ? '<div class="trash-actions"></div>' : ''}
    </div>
  `;
}

export default class TasksListComponent {
  constructor(status) {
    this.status = status;
    this.element = null;
  }

  getTemplate() {
    return createTasksListComponentTemplate(this.status);
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
