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
