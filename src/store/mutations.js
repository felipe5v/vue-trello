import * as types from "./mutations-types";

export default {
  /* Fetch de los paneles creados por el usuario */
  [types.FETCH_BOARDS_REQUEST](state) {
    state.fetchingData = true;
    state.error = null;
  },
  [types.FETCH_BOARDS_SUCCESS](state, { boards }) {
    state.fetchingData = false;
    state.error = null;
    state.boards = { ...boards };
  },
  [types.FETCH_BOARDS_FAILURE](state, { error }) {
    state.fetchingData = false;
    state.error = error;
  },
  /* Fetch de las listas de un determinado panel */
  [types.FETCH_LISTS_REQUEST](state) {
    state.fetchingData = true;
    state.error = null;
  },
  [types.FETCH_LISTS_SUCCESS](state, { lists }) {
    state.fetchingData = false;
    state.error = null;
    state.lists = { ...lists };
  },
  [types.FETCH_LISTS_FAILURE](state, { error }) {
    state.fetchingData = false;
    state.error = error;
  },

  /* fetch de las tareas correspondientes a una lista*/
  [types.FETCH_TASKS_REQUEST](state) {
    state.fetchingData = true;
    state.error = null;
  },
  [types.FETCH_TASKS_SUCCESS](state, { tasks }) {
    state.fetchingData = false;
    state.error = null;
    state.tasks = Object.assign({}, state.tasks, tasks);
  },
  [types.FETCH_TASKS_FAILURE](state, { error }) {
    state.fetchingData = false;
    state.error = error;
  },
  //Crear un nuevo panel
  [types.ADD_BOARD](state, { board }) {
    let newBoard = {};
    newBoard[board.id] = board;
    state.boards = Object.assign({}, state.boards, newBoard);
  },
  //Crear nueva lista de tareas
  [types.ADD_COLUMN](state, { column }) {
    let newColumn = {};
    newColumn[column.id] = column;
    state.lists = Object.assign({}, state.lists, newColumn);
  },
  //añadir una nueva tarea a una lista
  [types.ADD_TASK](state, { task }) {
    let newTask = {};
    newTask[task.id] = task;
    state.tasks = Object.assign({}, state.tasks, newTask);
  },
  //Borrar una tarea de una lista de tareas
  [types.DELETE_TASK](state, { taskId }) {
    state.tasks = Object.values(state.tasks).filter(
      (task) => task.id !== taskId
    );
  },

  //Marca completada una tarea
  [types.MARK_AS_COMPLETED](state, { task }) {
    task.completed = !task.completed;
  },
};
