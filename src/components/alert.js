import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide } from '../slices/alertSlice';
import { CSSTransition } from "react-transition-group";

export const Alert = () => {

  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
    
  const handleClose = () => {
    dispatch(hide());
  }

  return (
    <CSSTransition
      in={alert.visible}
      timeout={{
        enter: 500,
        exit: 350
      }}
      classNames={'alert'}
      mountOnEnter
      unmountOnExit
    >
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`}>
        <strong>{alert.type === 'warning' ? 'Attention!' : 'Succses!'}</strong>{alert.text}
        <button onClick={handleClose} type="button" className="btn-close" aria-label="Close">
        </button>
      </div>
      </CSSTransition>
    )
}