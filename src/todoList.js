import * as React from 'react'
import { observer } from 'mobx-react'
import TodoItem from './todoItem'

function TodoList({ items, onItemChange, onItemDelete }) {
  return (
    <ul>
      {items.map(item => (
        <TodoItem key={item.id} data={item} onChange={onItemChange} onDelete={onItemDelete} />
      ))}
    </ul>
  )
}

export default observer(TodoList)
