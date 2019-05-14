import * as React from 'react'
import { Observer } from 'mobx-react'
import { DndGrid } from '../dnd_grid'
import { filterTodos } from '../../helpers'
import { SearchContainer, GridContainer } from './styles'

function Browser({ items }) {
  const [searchTerm, setSearchTerm] = React.useState('')

  return (
    <Observer>
      {() => (
        <React.Fragment>
          {items.length > 1 && (
            <SearchContainer>
              Browse todos: <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </SearchContainer>
          )}
          <GridContainer>
            <DndGrid items={filterTodos(items, searchTerm)} />
          </GridContainer>
        </React.Fragment>
      )}
    </Observer>
  )
}

export default Browser
