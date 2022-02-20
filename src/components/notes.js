import React, { useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotes, removeNote, selectors} from "../slices/noteSlice.js";
import { Empty } from './empty.js';
import { show, hide } from '../slices/alertSlice';


export const Notes = () => {

    const dispatch = useDispatch();
    const notes = useSelector(selectors.selectAll);
    const status = useSelector((state) => state.notes.loading);

    useEffect(() => {
        dispatch(fetchNotes());
    }, [dispatch])

    const removeHandler = (note) => {
        dispatch(show({ visible: true, text: 'Processing delete...', type: 'warning' }))
        dispatch(removeNote(note));
        setTimeout(() => dispatch(hide()), 1500);
    };

    if (notes.length === 0) {
        return <Empty />
    }

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