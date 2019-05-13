import * as React from 'react'
import { observer } from 'mobx-react'
import TodoItem from './todoItem'

function TodoList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <TodoItem key={item.id} data={item} />
      ))}
    </ul>
  )
}

export default observer(TodoList)
