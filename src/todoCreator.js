import * as React from 'react'

function TodoCreator({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="enter todo" />
    </form>
  )
}

export default TodoCreator
