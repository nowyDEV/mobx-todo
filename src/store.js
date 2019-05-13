import { observable, action, computed, reaction } from 'mobx'

class DankState {
  @observable todos = JSON.parse(window.localStorage.getItem('todos')) || []
  @observable activeFilter

  constructor() {
    reaction(
      () => this.todos.length,
      () => {
        window.localStorage.setItem('todos', JSON.stringify(this.todos))
      }
    )
  }

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

  @action
  editTodo = (id, name) => {
    const todoToUpdate = this.todos.find(item => item.id === id)
    todoToUpdate.name = name
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
