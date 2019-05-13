export function generateTodo(name) {
  return {
    id: Date.now(),
    name,
    completed: false
  }
}

export function validateTodo(name) {
  const regexp = /[a-z]/
  return typeof name === 'string' && name.length < 255 && name.match(regexp)
}

export function filterTodos(items, name) {
  return items.filter(item => `${item.name}`.toUpperCase().indexOf(name.toUpperCase()) >= 0)
}

export function reorder(list, startIndex, endIndex) {
  const result = [...list]
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}
