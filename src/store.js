import { observable, action } from 'mobx'

class DankState {
  todos = observable.array()

  @action
  addTodo = item => {
    this.todos.push(item)
  }

  @action
  removeTodo = item => {
    this.todos.remove(item)
  }
}

export default DankState
