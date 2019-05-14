import * as React from 'react'
import styled from '@emotion/styled'
import { Draggable } from 'react-beautiful-dnd'
import Item from '../item'

const StyledDiv = styled('div')`
  width: 100%;
  max-width: 400px;
  border: 1px solid grey;
  margin-bottom: 10px;
  background-color: lightblue;
  padding: 10px;
`

function DndGridItem({ data, index }) {
  return (
    <Draggable draggableId={data.id} index={index}>
      {provided => (
        <StyledDiv ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Item data={data} />
        </StyledDiv>
      )}
    </Draggable>
  )
}

export default DndGridItem
