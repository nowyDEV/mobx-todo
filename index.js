import * as React from 'react'
import { render } from 'react-dom'
import DankState from './src/store'
import { observer } from 'mobx-react'
import TodoList from './src/todoList'
import TodoCreator from './src/todoCreator'
import { generateTodo } from './src/helpers'

@observer
class App extends React.Component {
  dankState = new DankState()

  handleSubmit = name => {
    this.dankState.addTodo(generateTodo(name))
  }
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <TodoList items={this.dankState.todos} />
        <TodoCreator onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

if (typeof window !== 'undefined') {
  render(<App />, document.getElementById('root'))
}
