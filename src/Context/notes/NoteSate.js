import React, { useState } from "react";
import NotesContext from './NotesContext'
const NoteState = (props) => {
    const state1 = {
        name: 'Ujjwal',
        age: 20
    }

    const [state2, setData] = useState(state1)

    const update = () => {
        setTimeout(() => {
            setData({
                name: 'Prajwal',
                age: 21
            })
        }, 1000)
    }
    return (
        <NotesContext.Provider value={{ state2, update }}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NoteState;


// ye ek state hai jo ki sb component ko access hoga (Context hai)