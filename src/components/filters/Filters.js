import * as React from 'react'
import { StyledForm } from './styles'

function TodoFilter({ onChange }) {
  const [filter, setFilter] = React.useState('all')
  React.useEffect(() => {
    onChange(filter)
  })

  return (
    <StyledForm>
      <label>
        <input type="radio" value="completed" checked={filter === 'all'} onChange={() => setFilter('all')} />
        All
      </label>
      <label>
        <input type="radio" value="uncompleted" checked={filter === 'active'} onChange={() => setFilter('active')} />
        Active
      </label>
      <label>
        <input
          type="radio"
          value="completed"
          checked={filter === 'completed'}
          onChange={() => setFilter('completed')}
        />
        Completed
      </label>
    </StyledForm>
  )
}

export default TodoFilter
