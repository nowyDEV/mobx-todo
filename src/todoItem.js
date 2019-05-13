import * as React from 'react'
import { observer, inject } from 'mobx-react'

function TodoItem({ data, store }) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={data.completed} onChange={() => store.toggleTodo(data.id)} />
        {data.name}
      </label>
      <button type="button" onClick={() => store.removeTodo(data.id)}>
        X
      </button>
    </li>
  )
}

export default inject('store')(observer(TodoItem))
