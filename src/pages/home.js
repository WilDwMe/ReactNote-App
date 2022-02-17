import React, { Fragment } from "react";
import { Form } from "../components/form";
import { Notes } from "../components/notes";
import Loader from '../components/loader';


export const Home = () => {
 
    const loading = false;
    
    return (
        <Fragment>
            <h1>You notes</h1>
            <Form />
            <hr />
            { loading ? <Loader /> : <Notes /> }
        </Fragment>
    )
}