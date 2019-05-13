import * as React from 'react'

function TodoCreator({ onSubmit }) {
  const [name, setName] = React.useState('')
  const handleSubmit = e => {
    console.log('runrunrun')
    e.preventDefault()
    onSubmit(name)
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
