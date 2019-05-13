import * as React from 'react'
import { observer } from 'mobx-react'

function TodoItem({ data, onDelete, onChange }) {
  return (
    <li>
      <input type="checkbox" checked={data.checked} onChange={onChange} />
      {data.name}
      <button type="button" onClick={onDelete}>
        X
      </button>
    </li>
  )
}

export default observer(TodoItem)
