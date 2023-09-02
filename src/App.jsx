import { useEffect, useState } from "react"
import { Form } from "./Form"
import { TodoList } from "./TodoList"
import { }  from "./index.css"


export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('TODO_ITEM')
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => { 
    document.title = 'todo-app-react';
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
      <h1 className="my-5-d text-4xl text-center text-violet-500"> Todo App</h1>
      <Form onNewItem={addNewItem} />
      <TodoList
        todos={todos}
        toggleCheckBox={toggleCheckBox}
        deleteItem={deleteItem}
      />
    </>
  )

}