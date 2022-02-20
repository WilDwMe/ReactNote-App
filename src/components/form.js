import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { show, hide } from '../slices/alertSlice';
import { sendNote } from '../slices/noteSlice';

import _ from 'lodash';

export const Form = () => {

    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if (value.trim()){
            dispatch(show({ visible: true, text: 'Note succesfull added', type: 'primary' }));
            dispatch(sendNote({ id: _.uniqueId(), text: value }))
            setValue('');
            setTimeout(() => dispatch(hide()), 1500);
        } else {
            dispatch(show({ visible: true, text: 'Please write note before save it' }));
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Please enter here a new note for record'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}