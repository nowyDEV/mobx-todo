import * as React from 'react'
import { observer } from 'mobx-react'

function TodoItem({ data, onDelete, onChange }) {
  return (
    <li>
      <input type="checkbox" checked={data.completed} onChange={() => onChange(data.id)} />
      {data.name}
      <button type="button" onClick={() => onDelete(data.id)}>
        X
      </button>
    </li>
  )
}

export default observer(TodoItem)
