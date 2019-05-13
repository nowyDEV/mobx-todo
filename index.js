import * as React from 'react'
import { render } from 'react-dom'
import DankState from './src/store'
import { observer, Provider } from 'mobx-react'
import TodoList from './src/todoList'
import TodoCreator from './src/todoCreator'
import TodoFilter from './src/todoFilter'
import { generateTodo } from './src/helpers'

@observer
class App extends React.Component {
  dankState = new DankState()

  handleSubmit = name => {
    this.dankState.addTodo(generateTodo(name))
  }

  handleFilterChange = filter => {
    this.dankState.setFilter(filter)
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <TodoFilter onChange={this.handleFilterChange} />
        <Provider store={this.dankState}>
          <TodoList items={this.dankState.todoItems} />
        </Provider>
        <TodoCreator onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

if (typeof window !== 'undefined') {
  render(<App />, document.getElementById('root'))
}
