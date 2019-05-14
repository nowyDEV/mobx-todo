import * as React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { Store } from '../../'
import List from '../list'
import { reorder } from '../../helpers'

function DndGrid({ items }) {
  const store = React.useContext(Store)
  const onDragEnd = result => {
    if (!result.destination) {
      return
    }

    if (result.destination.index === result.source.index) {
      return
    }

    store.setTodos(reorder(store.todos, result.source.index, result.destination.index))
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {provided => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            <List items={items} />
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default DndGrid
