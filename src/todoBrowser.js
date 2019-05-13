import * as React from 'react'
import { Observer } from 'mobx-react'
import TodoList from './todoList'
import { filterTodos } from './helpers'

function TodoBrowser({ items }) {
  const [searchTerm, setSearchTerm] = React.useState('')

  return (
    <Observer>
      {() => (
        <div>
          {items.length > 1 && (
            <React.Fragment>
              Browse todos <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </React.Fragment>
          )}
          <TodoList items={filterTodos(items, searchTerm)} />
        </div>
      )}
    </Observer>
  )
}

export default TodoBrowser
