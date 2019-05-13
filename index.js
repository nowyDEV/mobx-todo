import * as React from 'react'
import { render } from 'react-dom'
import DankState from './src/store'
import { observer } from 'mobx-react'
import TodoList from './src/todoList'

@observer
class App extends React.Component {
  dankState = new DankState()
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <TodoList items={this.dankState.todos} />
      </div>
    )
  }
}

if (typeof window !== 'undefined') {
  render(<App />, document.getElementById('root'))
}
