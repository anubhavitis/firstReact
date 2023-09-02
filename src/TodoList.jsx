import { TodoItem } from "./TodoItem"

export function TodoList({
    todos, toggleCheckBox, deleteItem
}) {
    return <ul
        className="m-5 grid text-center sm:grid-cols-2 lg:grid-cols-3 sm:w-4/5 sm:mx-auto"
    >
        {todos.length === 0 && "No Todos Available"}
        {todos.map(todo => {
            return <TodoItem
                id={todo.id}
                title={todo.title}
                checked={todo.complete}
                key={todo.id}
                toggleCheckBox={toggleCheckBox}
                deleteItem={deleteItem}
            />
        })}
    </ul>
}