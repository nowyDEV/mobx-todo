import * as React from 'react'
import TodoItem from './todoItem'
import styled from '@emotion/styled'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Store } from '../'
import { reorder } from './helpers'

const StyledItem = styled.div`
  width: 100%;
  max-width: 400px;
  border: 1px solid grey;
  margin-bottom: 10px;
  background-color: lightblue;
  padding: 10px;
`

function TodoSingle({ data, index }) {
  return (
    <Draggable draggableId={data.id} index={index}>
      {provided => (
        <StyledItem ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <TodoItem data={data} />
        </StyledItem>
      )}
    </Draggable>
  )
}

function Todos({ items }) {
  return items.map((item, index) => <TodoSingle key={item.id} data={item} index={index} />)
}

function TodoList({ items }) {
  const store = React.useContext(Store)
  function onDragEnd(result) {
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
            <Todos items={items} />
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default TodoList
