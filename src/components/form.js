import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { show } from '../slices/alertSlice';
import { addNote } from '../slices/noteSlice';
import _ from 'lodash';

export const Form = () => {

    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if (value.trim()){
            dispatch(show({ visible: true, text: 'Note succesfull added', type: 'primary' }));
            dispatch(addNote({ id: _.uniqueId(), text: value }))
            setValue('');
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
                    placeholder='Please enter name for new mark'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}