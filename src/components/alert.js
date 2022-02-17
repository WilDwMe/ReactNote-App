import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide } from '../slices/alertSlice';

export const Alert = () => {

  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
    
    if (!alert.visible) {
        return null;
  }

  const handleClose = () => {
    dispatch(hide());
  }

    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`}>
        <strong>Attention!</strong>{alert.text}
        <button onClick={handleClose} type="button" className="btn-close" aria-label="Close">
        </button>
      </div>
    )
}