import React, { useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotes, removeNote, selectors } from "../slices/noteSlice.js";
import _ from 'lodash';

export const Notes = () => {

    const dispatch = useDispatch();
    const notes = useSelector(selectors.selectAll);

    useEffect(() => {
        dispatch(fetchNotes());
    }, [dispatch])

    
    console.log(notes);

    const removeHandler = (note) => {
        dispatch(removeNote(note));
    };

    if (notes.length === 0) {
        return (
            <div
                className={'emptynote'}
                timeout={800}
                key={_.uniqueId()}>
                    <div className="container-fluid ">Nothing here...</div>
            </div>
        )
    }

    return (
        <TransitionGroup component="ul" className="list-group">
            {notes.map((note) => (
                <CSSTransition
                    className={'note'}
                    timeout={800}
                    key={note.id}>
                    <li className="list-group-item note" id={note.id}>
                        <div className="note">
                            <strong>{note.text}</strong>
                            <small>{new Date().toLocaleDateString()}</small>
                        </div>
                        <button onClick={() => removeHandler(note.id)} type="button" className="btn btn-outline-danger btn-sm"><i className="bi bi-trash-fill"></i></button>
                    </li>
                </CSSTransition>
            ))}
            </TransitionGroup>
    );
}