export function TodoItem({
    id, title, checked, toggleCheckBox, deleteItem
}) {
    return <li>
        <label>
            <input type="checkbox"
                checked={checked}
                onChange={e => toggleCheckBox(id, e.target.checked)}
            />
            {title}
        </label>
        <button
            onClick={() => deleteItem(id)}
        > Delete </button>
    </li>
}