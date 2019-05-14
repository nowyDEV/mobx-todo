import * as React from 'react'
import { DndGridItem } from '../dnd_grid'

function List({ items }) {
  return items.map((item, index) => <DndGridItem key={item.id} data={item} index={index} />)
}

export default List
