import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectors, removeNote } from "../slices/noteSlice.js";

export const Notes = () => {

    const notes = useSelector((state) => selectors.selectAll(state));

    const dispatch = useDispatch();

    const removeHandler = (id) => {
        console.log(id)
        // dispatch(removeNote(id));
    };

    return (
        <ul className="list-group">
            {notes.map((note) => (
                <li className="list-group-item note"
                    key={note.id}
                    id={note.id}
                >
                <div>
                    <strong>{note.text}</strong>
                    <small>{new Date().toLocaleDateString()}</small>
                </div>
                    <button onClick={removeHandler} type="button" className="btn btn-danger btn-sm">&times;</button>
                </li>
            ))}
            </ul>
    );
}