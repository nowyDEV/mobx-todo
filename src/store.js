import { observable, action } from 'mobx'

class DankState {
  todos = observable.array()

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
    const todo = this.todos.find(item => item.id === id)
    todo.completed = !todo.completed
  }
}

export default DankState
