// src/view/tasks-board-component.js
import { createElement } from '../framework/render.js';
import { StatusOrder } from '../const.js';

function createTasksBoardComponentTemplate() {
  return `
    <section class="taskboard">
      <div class="board-columns">
        <!-- Les listes de tâches seront ajoutées ici -->
      </div>
    </section>
  `;
}

export default class TasksBoardComponent {
  constructor() {
    this.element = null;
  }

  getTemplate() {
    return createTasksBoardComponentTemplate();
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
