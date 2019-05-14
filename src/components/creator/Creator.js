import * as React from 'react'
import { generateTodo } from '../../helpers'
import Form from '../form'
import { StyledForm } from './styles'
import { Store } from '../../'

function Creator({ onSubmit }) {
  const store = React.useContext(Store)
  const handleSubmit = name => {
    store.addTodo(generateTodo(name))
  }

  return (
    <StyledForm>
      <label>
        Add todo: <Form onSubmit={handleSubmit} />
      </label>
    </StyledForm>
  )
}

export default Creator
