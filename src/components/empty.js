import React from "react";
import { CSSTransition } from "react-transition-group";
import _ from 'lodash';

export const Empty = () => (
    <CSSTransition
    className={'note'}
    timeout={500}
    key={_.uniqueId()}>
        <li className="list-group-item note"
            timeout={800}
            key={_.uniqueId()}>
            <div className="container-fluid ">Nothing here...</div>
        </li>
    </CSSTransition>
)