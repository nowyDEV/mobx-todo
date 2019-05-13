import * as React from 'react'
import { validateTodo } from './helpers'

function TodoCreator({ onSubmit }) {
  const [name, setName] = React.useState('')
  const handleSubmit = e => {
    e.preventDefault()
    validateTodo(name) ? onSubmit(name) : window.alert('wrong input (1-255 chars, at least 1 letter)')
    setName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="enter todo" onChange={e => setName(e.target.value)} value={name} />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoCreator
