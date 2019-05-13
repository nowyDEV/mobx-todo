import * as React from 'react'

function TodoItem({ data, onDelete, onChange }) {
  return (
    <li>
      <input type="checkbox" checked={data.checked} onChange={onChange} />
      {data.name}
      <button type="button" onClick={onDelete} />
    </li>
  )
}

export default TodoItem
