// src/main.js
import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import TasksModel from './model/tasks-model.js';
import { render, RenderPosition } from './framework/render.js';

// Sélection des conteneurs
const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.add-task');
const tasksBoardContainer = document.querySelector('.taskboard');

// Initialisation du modèle
const tasksModel = new TasksModel();

// Initialisation du présentateur
const tasksBoardPresenter = new TasksBoardPresenter({
  boardContainer: tasksBoardContainer,
  tasksModel,
});

// Rendu des composants statiques
render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);

// Initialisation du tableau de tâches
tasksBoardPresenter.init();

console.log('=== APPLICATION CHARGÉE AVEC SUCCÈS ===');
