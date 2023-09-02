import { useEffect, useState } from "react"
import { Form } from "./Form"
import { TodoList } from "./TodoList"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('TODO_ITEM')
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => { 
    localStorage.setItem('TODO_ITEM', JSON.stringify(todos))
  }, [todos] )

  function addNewItem(title) {
    setTodos(curr => {
      return [...curr, {
        "id": crypto.randomUUID(),
        "title": title,
        "complete": false
      }]
    })
  }

  function deleteItem(id) {
    setTodos(curr => {
      return curr.filter(item => item.id !== id)
    })
  }

  function toggleCheckBox(id, checked) {
    /// text-decoration: line-through;
    setTodos(curr => {
      return curr.map(todos => {
        if (todos.id === id) {
          return {
            ...todos,
            complete: checked
          }
        }

        return todos
      })
    })
  }

  return (
    <>
      <Form onNewItem={addNewItem} />
      <h1> Todo App</h1>
      <TodoList
        todos={todos}
        toggleCheckBox={toggleCheckBox}
        deleteItem={deleteItem}
      />
    </>
  )

}