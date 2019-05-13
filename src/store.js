import { observable, action, computed, reaction } from 'mobx'

class DankState {
  @observable todos = JSON.parse(window.localStorage.getItem('todos')) || []
  @observable activeFilter

  constructor() {
    reaction(
      () => this.todos.length,
      () => {
        this.saveData()
      }
    )
  }

  @action
  setTodos = items => {
    this.todos = [...items]
    this.saveData()
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
    const todoToUpdate = this.getTodo(id)
    todoToUpdate.completed = !todoToUpdate.completed
  }

  @action
  setFilter = filter => {
    this.activeFilter = filter
  }

  @action
  editTodo = (id, name) => {
    this.getTodo(id).name = name
  }

  getTodo = id => this.todos.find(item => item.id === id)

  saveData = () => {
    window.localStorage.setItem('todos', JSON.stringify(this.todos))
    console.log('save data')
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
