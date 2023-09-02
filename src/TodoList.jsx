import { TodoItem } from "./TodoItem"

export function TodoList({
    todos, toggleCheckBox, deleteItem
}) {
    return <ul>
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