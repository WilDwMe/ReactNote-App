import React, { useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotes, removeNote, selectors } from "../slices/noteSlice.js";
import { Empty } from './empty.js';


export const Notes = () => {

    const dispatch = useDispatch();
    const notes = useSelector(selectors.selectAll);

    useEffect(() => {
        dispatch(fetchNotes());
    }, [dispatch])

    const removeHandler = (note) => {
        dispatch(removeNote(note));
    };

    return (
        <TransitionGroup component="ul" className="list-group">
            { notes.map(({id, note}) => (
                <CSSTransition
                    key={note.id}
                    classNames={'note'}
                    timeout={500}>
                    <li className="list-group-item note">
                        <div className="note">
                            <strong>{note.text}</strong>
                            <small>{new Date().toLocaleDateString()}</small>
                        </div>
                        <button onClick={() => removeHandler(id)} type="button" className="btn btn-outline-danger btn-sm"><i className="bi bi-trash-fill"></i></button>
                    </li>
                </CSSTransition>))
            }
            </TransitionGroup>
    );
}