// src/const.js
export const StatusNames = {
  backlog: 'En Attente',     
  processing: 'En Cours',
  done: 'Terminées',
  trash: 'Corbeille'        
};

export const StatusClasses = {
  backlog: 'pending',
  processing: 'active', 
  done: 'completed',
  trash: 'deleted'
};

export const StatusOrder = ['backlog', 'processing', 'done', 'trash'];
