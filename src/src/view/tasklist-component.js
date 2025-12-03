import { createElement } from '../framework/render.js';

function createTaskListComponentTemplate(title, tasks = []) {
  const tasksHtml = tasks.map(task => 
    `<li class="task-card">${task}</li>`
  ).join('');

  return (
    `<div class="column">
      <div class="column-title ${getColumnClass(title)}">${title}</div>
      <ul class="items-list">
        ${tasksHtml}
      </ul>
      ${title === 'Corbeille' ? '<button class="empty-btn">Vider</button>' : ''}
    </div>`
  );
}

function getColumnClass(title) {
  const classes = {
    'En Attente': 'pending',
    'En Cours': 'active',
    'Terminées': 'completed',
    'Corbeille': 'deleted'
  };
  return classes[title] || '';
}

export default class TaskListComponent {
  constructor(title, tasks = []) {
    this.title = title;
    this.tasks = tasks;
    this.element = null;
  }

  getTemplate() {
    return createTaskListComponentTemplate(this.title, this.tasks);
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
