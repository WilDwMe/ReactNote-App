import React from "react";

export const Alert = ({ alert }) => {
    if (!alert) {
        return null;
    }

    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`} role="alert">
        <strong>Attention!</strong> {alert.text}
        <button type="button" className="close btn btn-danger btn-sm" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
}