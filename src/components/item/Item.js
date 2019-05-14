import * as React from 'react'
import { Observer } from 'mobx-react'
import Editor from '../form'
import { Store } from '../../'
import { StyledLi } from './styles'

function Item({ data }) {
  const [editView, setEditView] = React.useState(false)
  const store = React.useContext(Store)

  return (
    <Observer>
      {() =>
        editView ? (
          <Editor
            autoFocus
            onSubmit={name => {
              store.editTodo(data.id, name)
              setEditView(false)
            }}
          />
        ) : (
          <StyledLi>
            <label>
              <input type="checkbox" checked={data.completed} onChange={() => store.toggleTodo(data.id)} />
              {data.name}
            </label>
            <div>
              <button type="button" onClick={() => setEditView(true)}>
                Edit
              </button>
              <button type="button" onClick={() => store.removeTodo(data.id)}>
                Delete
              </button>
            </div>
          </StyledLi>
        )
      }
    </Observer>
  )
}

export default Item
