export const state = () =>({
  tasks: []
})

export const mutations = {
  ADD(state, task) {
    state.tasks = [...state.tasks, {name: task, done: false}];
  },
  DELETE(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },
  TOGGLE_DONE(state, task){
    task.done = !task.done;
  }
}
