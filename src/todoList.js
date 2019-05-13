import * as React from 'react'
import TodoItem from './todoItem'

function TodoList({ items, onClick }) {
  return (
    <ul>
      {items.map(item => (
        <TodoItem key={item.id} data={item} />
      ))}
    </ul>
  )
}

export default TodoList
