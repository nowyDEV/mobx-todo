import * as React from 'react'
import { validateTodo } from '../../helpers'

function Form({ onSubmit, ...inputProps }) {
  const [name, setName] = React.useState('')
  const handleSubmit = e => {
    e.preventDefault()
    validateTodo(name) ? onSubmit(name) : window.alert('wrong input (1-255 chars, at least 1 letter)')
    setName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input {...inputProps} type="text" placeholder="name" onChange={e => setName(e.target.value)} value={name} />
      <button type="submit">Accept</button>
    </form>
  )
}

export default Form
