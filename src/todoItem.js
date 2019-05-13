import * as React from 'react'
import { Observer } from 'mobx-react'
import TodoEditor from './todoForm'
import { Store } from '../'

function TodoItem({ data }) {
  const [editView, setEditView] = React.useState(false)
  const store = React.useContext(Store)

  return (
    <Observer>
      {() =>
        editView ? (
          <TodoEditor
            autoFocus
            onSubmit={name => {
              store.editTodo(data.id, name)
              setEditView(false)
            }}
          />
        ) : (
          <li>
            <label>
              <input type="checkbox" checked={data.completed} onChange={() => store.toggleTodo(data.id)} />
              {data.name}
            </label>
            <button type="button" onClick={() => store.removeTodo(data.id)}>
              X
            </button>
            <button type="button" onClick={() => setEditView(true)}>
              Edit
            </button>
          </li>
        )
      }
    </Observer>
  )
}

export default TodoItem
