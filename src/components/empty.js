import React from "react";
import { CSSTransition } from "react-transition-group";
import _ from 'lodash';

export const Empty = () => (
    <CSSTransition
    className={'note'}
    timeout={500}
        key={_.uniqueId()}>
        <div className="container-fluid" style={{ justifyContent: 'center', paddingBottom: '10px'}}>You don't have any notes...</div>
    </CSSTransition>
)