import { useState } from "react"

export function Form({onNewItem}) {
    const [newItem, setNewItem] = useState('')

    function AddNewItem(e) {
        e.preventDefault()
        onNewItem(newItem)
        setNewItem("")
    }

    return <form
        onSubmit={AddNewItem}
        className="m-2 px-4 my-3 py-5 text-center flex justify-center"
    >
        <div className="flex justify-center" >
            <input
                type="text"
                className="px-4 mx-2 text-violet-400 rounded-full border-2 border-violet-300"
                onChange={e => setNewItem(e.target.value)}
                placeholder="New Item"
                id="item"
                value={newItem}
            />
        </div>
        <button
            type="submit"
            className="px-5 text-white rounded-full bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        >Add Todo</button>
    </form>
}