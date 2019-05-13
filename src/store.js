import { observable, action, computed } from 'mobx'

class DankState {
  todos = observable.array()
  @observable activeFilter

  @action
  addTodo = item => {
    this.todos.push(item)
  }

  @action
  removeTodo = id => {
    this.todos.remove(this.todos.find(item => item.id === id))
  }

  @action
  toggleTodo = id => {
    const todoToUpdate = this.todos.find(item => item.id === id)
    todoToUpdate.completed = !todoToUpdate.completed
  }

  @action
  setFilter = filter => {
    this.activeFilter = filter
  }

  @computed
  get todoItems() {
    return (
      {
        all: this.todos,
        active: this.todos.filter(item => !item.completed),
        completed: this.todos.filter(item => item.completed)
      }[this.activeFilter] || []
    )
  }
}

export default DankState
