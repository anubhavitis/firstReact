import { useState } from "react"

export function Form({onNewItem}) {
    const [newItem, setNewItem] = useState('')

    function AddNewItem(e) {
        e.preventDefault()
        onNewItem(newItem)
        setNewItem("")
    }

    return <form onSubmit={AddNewItem}>
        <div>
            <label htmlFor="item"> New Item</label>
            <input
                type="text"
                onChange={e => setNewItem(e.target.value)}
                id="item"
                value={newItem}
            />
        </div>
        <button type="submit">Add</button>
    </form>
}