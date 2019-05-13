import * as React from 'react'
import { render } from 'react-dom'
import DankState from './src/store'
import { observer, Provider } from 'mobx-react'
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
        <Provider store={this.dankState}>
          <TodoList items={this.dankState.todos} />
        </Provider>
        <TodoCreator onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

if (typeof window !== 'undefined') {
  render(<App />, document.getElementById('root'))
}
