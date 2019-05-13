export function generateTodo(name) {
  return {
    id: Date.now(),
    name,
    completed: false
  }
}
