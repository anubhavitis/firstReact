export function TodoItem({
    id, title, checked, toggleCheckBox, deleteItem
}) {
    return <li
        className="p-2 my-2 mx-5 grid grid-cols-3 border-2 border-violet-200 rounded-full"
    >
        <div
            className="m-auto"
        >
            <input type="checkbox"
                className="mx-2"
                checked={checked}
                onChange={e => toggleCheckBox(id, e.target.checked)}
            />
        </div>
        <p className="mx-2 text-violet-500"> {title} </p>
        <div
            className="m-auto"
        >
            <button
                className="px-5 text-white rounded-full bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
                onClick={() => deleteItem(id)}
            > X </button>
        </div>
    </li>
}