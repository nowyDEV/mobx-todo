import * as React from 'react'
import { render } from 'react-dom'
import DankState from './src/store'
import { observer } from 'mobx-react'
import TodoBrowser from './src/todoBrowser'
import TodoCreator from './src/todoForm'
import TodoFilter from './src/todoFilter'
import { generateTodo } from './src/helpers'

export const Store = React.createContext()
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
        <Store.Provider value={this.dankState}>
          <TodoBrowser items={this.dankState.todoItems} />
        </Store.Provider>
        <div>
          Add: <TodoCreator onSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

if (typeof window !== 'undefined') {
  render(<App />, document.getElementById('root'))
}
