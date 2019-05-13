import * as React from 'react'
import { Observer } from 'mobx-react'
import TodoItem from './todoItem'

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
          <ul>
            {items
              .filter(item => `${item.name}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
              .map(item => (
                <TodoItem key={item.id} data={item} />
              ))}
          </ul>
        </div>
      )}
    </Observer>
  )
}

export default TodoBrowser
